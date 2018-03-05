<template>
  <div class="router-view">
    <div class="text-center my-12">
      <p class="inline-block font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter">{{ this.project[0].data.title[0].text }}</p>
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
  methods: {
    getContent() {
      const uid = this.uid;
      const Prismic = require('prismic-javascript');
      Prismic.getApi('https://sebastianwinther.prismic.io/api/v2')
        .then(function(api) {
          return api.query(Prismic.Predicates.at('my.blogpost.uid', uid));
        })
        .then(
          response => {
            this.project = response.results;
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
