<template>
  <div class="router-view">
    <ol>
      <li v-for="post in posts" class="font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter m-4">
        <router-link :to="post.uid">{{ post.data.title[0].text }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getContent() {
      let req;
      let Prismic = require('prismic-javascript');

      let apiEndpoint = 'https://sebastianwinther.prismic.io/api/v2';

      Prismic.getApi(apiEndpoint, { req: req })
        .then(function(api) {
          return api.query(''); // An empty query will return all the documents
        })
        .then(
          response => {
            this.posts = response.results;
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
