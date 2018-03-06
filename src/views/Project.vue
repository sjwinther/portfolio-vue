<template>
  <div v-if="project" class="router-view">
    <h1>{{ projectTitle }}</h1>
    <span class="block uppercase font-bold text-grey-dark -mt-4 mb-8">{{ projectDate }}</span>
    <div class="mb-12">
      <p>{{ projectDescription }}</p>
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
  metaInfo: {
    title: 'Project'
  },
  data() {
    return {
      project: '',
      richProjectDescription: ''
    };
  },
  computed: {
    projectTitle: function() {
      return this.project[0].data.title;
    },
    projectDate: function() {
      return this.project[0].data.date;
    },
    projectDescription: function() {
      const PrismicDOM = require('prismic-dom');

      const linkResolver = function(doc) {
        if (doc.type === 'project') return '/project/' + doc.uid;
        return '/doc/' + doc.id;
      };

      const htmlSerializer = function(element, content) {
        if (element.type == 'hyperlink') {
          return '<a href="' + element.url + '" target="_blank" rel="noopener" class="inline-link">' + content + '</a>';
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
