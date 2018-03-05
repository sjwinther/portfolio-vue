<template>

  <div id="app" class="min-h-screen flex flex-col pt-12">

    <nav class="fixed pin-x pin-t z-10 leading-none bg-white border-b border-grey-lighter p-4">
      <div class="absolute pin-y pin-l p-4">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <ul class="text-center list-reset">
        <router-link to="/" tag="li" class="inline-block text-black">
          <a class="font-bold hover:bg-grey-lighter rounded p-2">← Home</a>
        </router-link>
      </ul>
      <div class="hidden sm:block absolute pin-y pin-r p-4">
        Digital Designer
      </div>
    </nav>

    <router-view :projects="projects"/>

  </div>

</template>

<script>
export default {
  metaInfo: {
    titleTemplate: title => {
      return title ? `${title} | Sebastian Winther - Digital Designer` : 'Sebastian Winther - Digital Designer';
    }
  },
  data() {
    return {
      projects: ''
    };
  },
  methods: {
    getContent() {
      const prismic = require('prismic-javascript');
      prismic
        .getApi('https://sebastianwinther.prismic.io/api/v2')
        .then(function(api) {
          return api.query('');
        })
        .then(
          response => {
            this.projects = response.results;
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
@tailwind preflight;
@tailwind utilities;

#app {
  animation: 1.2s fade-in;
  @apply .font-plex-sans .antialiased .text-black;
}
nav .router-link-exact-active a {
  @apply .text-transparent .cursor-default;
}
nav .router-link-exact-active a:hover {
  @apply .bg-transparent .cursor-default;
}
.router-view {
  animation: 0.6s fade-in;
}
a {
  @apply .text-inherit .no-underline;
}
a,
button,
.transition {
  transition: 0.2s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  ,
  to {
    opacity: 1;
  }
}
</style>
