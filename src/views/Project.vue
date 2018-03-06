<template>
  <div v-if="project" class="router-view">
    <h1>{{ projectTitle }}</h1>
    <span class="block font-bold text-grey-dark uppercase -mt-4 mb-8">{{ projectDate }}</span>
    <div class="mb-12">
      <p>{{ projectDescription }}</p>
    </div>
    <div class="flex -mx-2 md:-mx-8">
      <div class="mx-2">
        <img :src="projectPreviewDesktop" :alt="projectTitle + ' desktop preview'" class="rounded-sm">
      </div>
      <div class="mx-2">
        <img :src="projectPreviewMobile" :alt="projectTitle + ' mobile preview'" class="rounded-sm">
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
      project: ''
    };
  },
  computed: {
    projectTitle: function() {
      return this.project[0].data.title[0].text;
    },
    projectDate: function() {
      return this.project[0].data.date;
    },
    projectDescription: function() {
      return this.project[0].data.description[0].text;
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
