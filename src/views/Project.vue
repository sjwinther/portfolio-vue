<template>
  <div v-if="project" class="router-view">
    <h1 class="inline-block font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter mt-12 mb-4">{{ projectTitle }}</h1>
    <span class="block text-grey-dark uppercase mb-8">{{ projectDate }}</span>
    <div class="mb-12">
      <p>{{ projectDescription }}</p>
    </div>
    <img :src="projectPreview" alt="">
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
    projectPreview: function() {
      return this.project[0].data.preview.url;
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
