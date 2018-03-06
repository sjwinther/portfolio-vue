<template>
  <div class="router-view">
      <h1>Hi, I'm Sebastian</h1>
      <p>I'm a 24-year old student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen. I enjoy digital design, music and the occasional beer or five. When I don't spend my time studying, I spend it working at <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a> — a Danish political party which I co-founded.</p>
      <p>Welcome to my portfolio. It's a work in progress being built with
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="inline-link">Vue.js</a>,
        <a href="https://prismic.io/" target="_blank" rel="noopener" class="inline-link">Prismic CMS</a>,
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="inline-link">Tailwind CSS</a>
        and set in <a href="https://github.com/IBM/plex" target="_blank" rel="noopener" class="inline-link">IBM Plex</a>.
      </p>
      <h2 class="font-normal text-grey-darker text-2xl mt-12 mb-4">Projects</h2>
      <ul class="list-reset flex flex-wrap">
        <router-link v-for="project in projects" :to="'/project/' + project.uid" :key="project.index" tag="li" class="w-full sm:w-1/2 md:w-1/3 my-2">
          <a class="group inline-block font-bold bg-white rounded-sm shadow px-4 py-2 hover:pr-3">
            {{ project.data.title }}
            <span class="text-teal transition ml-1 group-hover:ml-2">→</span>
          </a>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['projects']
};
</script>

<style>

</style>
