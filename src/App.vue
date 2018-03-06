<template>

  <div id="app" class="px-4 py-8 md:py-12">

    <nav class="fixed pin-x pin-t z-10 leading-none bg-white border-b-2 border-grey-lighter py-4 mx-4">
      <div class="absolute pin-y pin-l py-4">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <ul class="text-center list-reset">
        <router-link to="/" tag="li" class="inline-block text-black">
          <a class="group font-bold m-2 hover:mr-3"><span class="text-teal transition mr-1 group-hover:mr-2">←</span>Home</a>
        </router-link>
      </ul>
      <div class="hidden sm:block absolute pin-y pin-r py-4">
        Digital Designer
      </div>
    </nav>

    <div class="max-w-md mx-auto">
      <router-view :projects="projects"/>
    </div>

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
      const Prismic = require('prismic-javascript');
      Prismic.getApi('https://sebastianwinther.prismic.io/api/v2')
        .then(function(api) {
          return api.query(Prismic.Predicates.at('document.type', 'project'));
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
  @apply .opacity-0 .cursor-default;
}
.router-view {
  animation: 1.2s fade-in;
}

a {
  @apply .text-inherit .no-underline;
}
a,
button,
.transition {
  transition: 0.15s ease-out;
}
h1 {
  @apply .inline-block .font-bold .text-4xl .border-b-4 .border-teal .mt-12 .mb-8;
}
p {
  @apply .text-lg .leading-normal .text-grey-darkest .mb-4;
}

.inline-link {
  @apply .text-black .border-b-2 .border-grey-light;
}
.inline-link:hover {
  @apply .border-teal;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
