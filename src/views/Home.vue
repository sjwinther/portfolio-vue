<template>
  <div class="fade-in">
    <div class="mb-8">
      <h1>Hi, I'm Sebastian</h1>
      <p>I'm a 24-year old student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen.
        I like art, design, typography, music and the occasional beer or five,
        and I co-founded a political party in Denmark called <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a>.</p>
      <p>Welcome to my portfolio. It's a work in progress being built with
        <a href="https://vuejs.org/" target="_blank" rel="noopener" class="inline-link">Vue.js</a>,
        <a href="https://prismic.io/" target="_blank" rel="noopener" class="inline-link">Prismic CMS</a> &
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="inline-link">Tailwind CSS</a>.
      </p>
      <p>Do you want to talk about a project? <span class="font-semibold text-teal mr-1">→</span><a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-link font-bold">Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in">
      <h2 class="font-normal text-grey-darker text-2xl mb-4">Projects</h2>
      <ul class="list-reset flex flex-wrap">
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li" class="w-full sm:w-1/2 md:w-1/3 my-2">
          <a :class="'group inline-block font-bold hover:text-white bg-white rounded-sm shadow px-6 py-2 hover:bg-' + aColor(index)">
            {{ project.data.title }}<span class="inline-block text-teal group-hover:text-white transition ml-2 group-hover:translate-1">→</span>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects'],
  data() {
    return {
      colors: ['yellow-dark', 'blue-light', 'indigo', 'green', 'orange', 'pink']
    };
  },
  methods: {
    aColor(i) {
      return this.colors[i];
    },
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  },
  beforeMount() {
    this.shuffleArray(this.colors);
  }
};
</script>

<style>

</style>
