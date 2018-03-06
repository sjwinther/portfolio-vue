<template>
  <div class="router-view">
    <h1 class="inline-block font-bold text-4xl sm:text-5xl border-b-4 border-teal mt-12 mb-8">Hi, I'm Sebastian<span class="inline-block border-b-4 border-white pl-2 sm:pl-4 -mb-2">👋</span></h1>
    <p>I'm a 24-year old student at the Digital Design and Communication programme at the IT-University of Copenhagen. I enjoy digital design, music and the occasional beer or five. When I don't spend my time studying, I spend it working at <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a> — a Danish political party which I co-founded.</p>
    <p>Welcome to my portfolio. It's a work in progress being built with:
    <a href="https://vuejs.org/" target="_blank" class="inline-link">Vue.js</a>,
    <a href="https://prismic.io/" target="_blank" class="inline-link">Prismic CMS</a>,
    <a href="https://tailwindcss.com/" target="_blank" class="inline-link">Tailwind CSS</a>
    and set in <a href="https://github.com/IBM/plex" target="_blank" class="inline-link">IBM Plex</a>.
  </p>
    <p>Below you'll find a few projects, I have worked on.</p>
    <ul class="list-reset">
      <router-link v-for="project in projects" :to="'/project/' + project.uid" :key="project.index" tag="li"><a class="group inline-block font-bold text-xl border-b-2 border-transparent hover:border-grey-light my-2">{{ project.data.title[0].text }}<span class="text-teal transition ml-1 group-hover:ml-2">→</span></a></router-link>
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
