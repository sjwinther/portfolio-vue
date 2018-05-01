<template>
  <div v-if="project" class="py-12 fade-in">
    <h1>{{ projectTitle }}</h1>
    <span class="block text-lg uppercase -mt-2 mb-8">{{ projectDate }}</span>
    <div v-html="projectDescription" class="mb-12"></div>
    <div class="flex -mx-2 lg:-mx-12">
      <div v-if="projectPreviewDesktop" class="mx-2">
        <img :src="projectPreviewDesktop" :alt="projectTitle + ' desktop preview'" class="border border-solid border-black">
      </div>
      <div v-if="projectPreviewMobile" class="mx-2">
        <img :src="projectPreviewMobile" :alt="projectTitle + ' mobile preview'" class="border border-solid border-black">
      </div>
      <div v-if="projectPreviewApp" class="mx-2">
        <img :src="projectPreviewApp" :alt="projectTitle + ' app preview'">
      </div>
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
    },
    projectPreviewDesktop: function() {
      return this.project.data.preview_desktop.url;
    },
    projectPreviewMobile: function() {
      return this.project.data.preview_mobile.url;
    },
    projectPreviewApp: function() {
      return this.project.data.preview_app.url;
    }
  }
};
</script>

<style>

</style>
