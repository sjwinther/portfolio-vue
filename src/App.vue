<template>

  <div id="app" class="min-h-full flex flex-col max-w-lg px-4 mx-auto">

    <nav class="flex text-lg border-b border-grey-light py-2">
      <div class="flex-auto py-3">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <div class="fixed pin-x pin-t text-center">
        <router-link to="/" class="group inline-block font-bold bg-white border border-grey-light p-3 my-2">
          <span class="inline-block text-blue transition mr-2 group-hover:translate-x--1">←</span>Home
        </router-link>
      </div>
      <div class="hidden sm:block py-3">
        Digital Designer
      </div>
    </nav>

    <main class="flex-auto py-12">
      <router-view :projects="projects"/>
    </main>

    <footer class="border-t border-grey-light py-6">
      <p class="text-sm text-center mx-auto my-0">Built with
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="inline-link">Vue.js</a>,
        <a href="https://prismic.io/" target="_blank" rel="noopener" class="inline-link">Prismic CMS</a> &
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="inline-link">Tailwind CSS</a>.
      </p>
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
          return api.query(Prismic.Predicates.at('document.type', 'project'), { orderings: '[my.project.date desc]' });
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
}
nav .router-link-exact-active {
  @apply .opacity-0 .cursor-default;
}
.fade-in {
  animation: 0.4s fade-in;
}

html,
body {
  @apply .h-full;
}
html {
  @apply .font-plex-sans .leading-none .tracking-wide .text-black .bg-white .antialiased;
}
a {
  @apply .text-inherit .no-underline;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-semibold;
}
h1 {
  @apply .text-3xl .mb-4;
}
p {
  @apply .leading-normal .max-w-md .mb-4;
}

a,
button,
.transition {
  transition: 0.15s ease-out;
}

.inline-link {
  @apply .text-blue;
}
.inline-link:hover {
  @apply .text-white .bg-blue;
}

@variants hover {
  .translate-y--1 {
    transform: translateY(-0.25rem);
  }
}

@variants group-hover {
  .translate-x-2 {
    transform: translateX(0.5rem);
  }
  .translate-x--1 {
    transform: translateX(-0.25rem);
  }
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
