<template>

  <div id="app" class="min-h-full flex flex-col max-w-lg bg-grey-lighter px-4 mx-auto">

    <nav class="flex text-grey-dark border-b-2 border-grey-light py-2">
      <div class="flex-auto py-3">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <div class="fixed pin-x pin-t text-center">
        <router-link to="/" class="group inline-block font-bold text-black bg-white rounded-sm shadow p-3 hover:pl-2 my-2">
          <span class="text-teal transition mr-1 group-hover:mr-2">←</span>Home
        </router-link>
      </div>
      <div class="hidden sm:block py-3">
        Digital Designer
      </div>
    </nav>

    <main class="flex-auto py-12">
      <router-view :projects="projects"/>
    </main>

    <footer class="text-center border-t-2 border-grey-light py-5">
      <a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="text-grey-dark">sebastianwinther@gmail.com</a>
    </footer>

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
  animation: 0.8s fade-in;
  @apply .font-plex-sans .leading-none .text-lg .text-black .antialiased;
}
nav .router-link-exact-active {
  @apply .opacity-0 .cursor-default;
}
.router-view {
  animation: 0.2s fade-in;
}

html,
body {
  @apply .h-full;
}
html {
  @apply .bg-grey-lighter;
}
a {
  @apply .text-inherit .no-underline;
}
h1 {
  @apply .inline-block .text-4xl .mb-8;
}
p {
  @apply .leading-normal .text-grey-darkest .max-w-md .mb-4;
}
li {
  @apply .leading-normal;
}

a,
button,
.transition {
  transition: 0.15s ease-out;
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
