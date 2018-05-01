<template>
  <div v-if="project" class="py-12 fade-in">
    <h1>{{ projectTitle }}</h1>
    <span class="block text-lg uppercase -mt-2 mb-8">{{ projectDate }}</span>
    <div v-html="projectDescription" class="mb-12"></div>
    <div class="-mx-2 lg:-mx-12">
      <img src="https://source.unsplash.com/random/1000x500" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects', 'uid'],
  name: 'Project',
  metaInfo() {
    if (this.project) {
      return {
        title: this.projectTitle
      };
    }
    return { title: '' };
  },
  computed: {
    project: function() {
      const uid = this.uid;
      function theProject(project) {
        return project.uid === uid;
      }
      if (this.projects) {
        return this.projects.find(theProject);
      }
      return null;
    },
    projectTitle: function() {
      return this.project.data.title;
    },
    projectDate: function() {
      const date = this.project.data.date;
      const month = date.substring(5, 7);
      let year = date.substring(2, 4);
      let season = '';
      if (month < 3) {
        season = 'Winter';
        year = --year + '/' + ++year;
      } else if (month == 12) {
        season = 'Winter';
        year = year + '/' + ++year;
      } else if (month < 6 && month > 2) {
        season = 'Spring';
      } else if (month < 9 && month > 5) {
        season = 'Summer';
      } else if (month < 12 && month > 8) {
        season = 'Fall';
      }
      return season + " '" + year;
    },
    projectDescription: function() {
      const PrismicDOM = require('prismic-dom');

      const linkResolver = function(doc) {
        if (doc.type === 'project') return '/project/' + doc.uid;
        return '/doc/' + doc.id;
      };

      const htmlSerializer = function(element, content) {
        if (element.type == 'hyperlink') {
          return (
            '<a href="' + element.data.url + '" target="_blank" rel="noopener" class="inline-link">' + content + '</a>'
          );
        }
        return null;
      };

      return PrismicDOM.RichText.asHtml(this.project.data.description, linkResolver, htmlSerializer);
    }
  }
};
</script>

<style>

</style>
