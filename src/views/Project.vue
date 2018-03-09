<template>
  <div v-if="project" class="fade-in">
    <h1>{{ projectTitle }}</h1>
    <span class="block uppercase font-bold text-grey-dark -mt-4 mb-8">{{ projectDate }}</span>
    <div v-html="projectDescription" class="mb-12">
    </div>
    <div class="flex -mx-2 lg:-mx-12">
      <div class="mx-2">
        <img :src="projectPreviewDesktop" :alt="projectTitle + ' desktop preview'" class="rounded-sm shadow">
      </div>
      <div class="mx-2">
        <img :src="projectPreviewMobile" :alt="projectTitle + ' mobile preview'" class="rounded-sm shadow">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['uid'],
  name: 'Project',
  metaInfo() {
    if (this.project.length > 0) {
      return {
        title: this.projectTitle
      };
    }
    return { title: '' };
  },
  data() {
    return {
      project: ''
    };
  },
  computed: {
    projectTitle: function() {
      return this.project[0].data.title;
    },
    projectDate: function() {
      const date = this.project[0].data.date;
      const year = date.substring(2, 4);
      const month = date.substring(5, 7);
      let season = '';
      if (month < 3) {
        season = 'Winter';
      } else if (month == 12) {
        season = 'Winter';
      } else if (month < 6 && month > 2) {
        season = 'Spring';
      } else if (month < 9 && month > 5) {
        season = 'Summer';
      } else if (month < 12 && month > 8) {
        season = 'Autumn';
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

      return PrismicDOM.RichText.asHtml(this.project[0].data.description, linkResolver, htmlSerializer);
    },
    projectPreviewDesktop: function() {
      return this.project[0].data.preview_desktop.url;
    },
    projectPreviewMobile: function() {
      return this.project[0].data.preview_mobile.url;
    }
  },
  methods: {
    getContent() {
      const uid = this.uid;
      const Prismic = require('prismic-javascript');

      Prismic.getApi('https://sebastianwinther.prismic.io/api/v2')
        .then(function(api) {
          return api.query(Prismic.Predicates.at('my.project.uid', uid));
        })
        .then(
          response => {
            if (response.results.length > 0) {
              this.project = response.results;
            } else {
              return this.$router.push('/404');
            }
          },
          function(err) {
            console.log('Something went wrong: ', err);
          }
        );
    }
  },
  beforeMount() {
    this.getContent();
  }
};
</script>

<style>

</style>
