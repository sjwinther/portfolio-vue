<template>

  <div id="app" class="min-h-full flex flex-col max-w-lg px-4 mx-auto">

    <nav class="flex text-lg border-b-2 border-grey-lighter py-5">
      <div class="flex-auto py-3">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <div class="fixed pin-x pin-t text-center">
        <router-link to="/" class="relative z-10 group inline-block bg-white rounded-sm shadow p-3 my-5">
          <span class="inline-block text-blue transition mr-2 group-hover:translate-x--1">←</span>Home
        </router-link>
      </div>
      <div class="py-3">
        <span class="hidden sm:inline">UX </span>Designer
      </div>
    </nav>

    <main class="flex-auto py-6 sm:py-12">
      <router-view :projects="projects"/>
    </main>

    <footer class="text-lg text-center border-t-2 border-grey-lighter py-8">
        <a href="https://github.com/sjwinther/portfolio-vue" target="_blank" rel="noopener" class="inline-link">Work in progress</a>
    </footer>

  </div>

</template>

<script>
export default {
  metaInfo: {
    titleTemplate: title => {
      return title ? `${title} | Sebastian Winther - UX Designer` : 'Sebastian Winther - UX Designer';
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
          return api.query(
            [
              Prismic.Predicates.at('document.type', 'project')
              Prismic.Predicates.at('document.tags', ['released'])
            ],
            {
              orderings: '[my.project.date desc]'
            }
          );
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

::selection {
  color: white;
  background: blue;
}
html,
body {
  @apply .h-full;
}
html {
  @apply .font-plex-sans .leading-none .tracking-wide .text-black .bg-grey-lightest .antialiased;
}
a {
  @apply .text-inherit .no-underline;
}
h1 {
  @apply .font-pt-serif .text-3xl .mb-12;
}
p {
  @apply .text-lg .leading-normal .max-w-lg .mb-4;
}
@media screen and (min-width: 576px) {
  p {
    @apply .text-xl;
  }
}

a,
button,
.transition {
  transition: 0.1s ease-out;
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

/* ANIMATIONS */

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* GRID STYLING */

.grid {
  display: grid;
  grid-auto-rows: 1rem;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
@media screen and (min-width: 576px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
.grid-item {
  grid-row: span 8;
}
.grid-item:nth-child(1) {
  grid-row: span 1;
}

/* PROJECTS STYLING */

.content-block img,
.content-block video {
  @apply .rounded-sm .shadow;
}
.content-block video {
  @apply .max-w-full;
}
.content-block figcaption {
  @apply .max-w-md .text-center .leading-normal .mx-auto .mt-2;
}
.content-block figure {
  @apply .mb-8;
}
@media screen and (min-width: 576px) {
  .content-block figure {
    @apply .mb-0;
  }
}
</style>
