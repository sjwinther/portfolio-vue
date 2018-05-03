<template>

  <div id="app" class="min-h-full flex flex-col max-w-lg px-4 mx-auto">

    <nav class="flex text-lg border-b-2 border-grey-light py-4">
      <div class="flex-auto py-3">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <div class="fixed pin-x pin-t text-center">
        <router-link to="/" class="group inline-block bg-white rounded-sm shadow p-3 my-4">
          <span class="inline-block text-blue transition mr-2 group-hover:translate-x--1">←</span>Home
        </router-link>
      </div>
      <div class="py-3">
        <span class="hidden sm:inline">UX </span>Designer
      </div>
    </nav>

    <main class="flex-auto py-12">
      <router-view :projects="projects"/>
    </main>

    <footer class="border-t-2 border-grey-light py-8">
      <p class="text-lg text-center mx-auto my-0">
        <a href="https://github.com/sjwinther/portfolio-vue" target="_blank" rel="noopener" class="inline-link">Work in progress</a> — more projects will be added soon.
      </p>
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
  @apply .text-xl .leading-normal .max-w-lg .mb-4;
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

/* GRID STYLING */

.grid {
  display: grid;
  grid-auto-rows: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
@media screen and (max-width: 576px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.grid-item {
  grid-row: span 8;
}
.grid-item:nth-child(1) {
  grid-row: span 1;
}

/* PROJECTS STYLING */

.content-block img {
  @apply .rounded-sm .shadow;
}
.content-block figcaption {
  @apply .max-w-md .text-center .leading-normal .mx-auto .mt-2;
}
@media screen and (max-width: 576px) {
  .content-block figure {
    @apply .mb-8;
  }
}
</style>
