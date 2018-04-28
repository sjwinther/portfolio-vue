<template>
  <div class="fade-in">
    <div class="mb-12">
      <h1>Hi, I'm Sebastian</h1>
      <p>I'm a 24-year old student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen.
        I like music, design, technology, and the occasional beer or five.
        And I co-founded a political party in Denmark called <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a>.</p>
        <p>I'm good at XYZ ...</p>
      <p>Do you want to get in touch? <span class="font-semibold text-teal mr-1">→</span><a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-link font-bold">Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in">
      <h2 class="font-normal text-grey-darker text-xl mb-4">Projects</h2>
      <ul class="list-reset lg:-mx-12 -mt-8">
        <li></li>
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li">
          <a class="group h-full flex flex-col justify-end rounded-sm overflow-hidden shadow hover:shadow-lg hover:translate-y--1">
            <div :style="'background-color: ' + project.data.color" class="flex-grow flex items-center justify-center">
              <h3 class="text-3xl text-white">{{ project.data.title }}</h3>
            </div>
            <span class="relative block text-lg bg-white border-t border-grey-lighter px-6 py-3">
            Explore project<span class="absolute pin-r font-bold text-teal transition group-hover:translate-x-2 mr-6">→</span>
            </span>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects']
};
</script>

<style>
ul {
  display: grid;
  grid-auto-rows: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
@media screen and (max-width: 576px) {
  ul {
    grid-template-columns: 1fr;
  }
}
li {
  grid-row: span 12;
}
li:nth-child(1) {
  grid-row: span 1;
}
li:nth-child(2) {
  grid-row: span 10;
}
li:nth-child(3) {
  grid-row: span 11;
}
li:nth-child(4) {
  grid-row: span 12;
}
li:nth-child(5) {
  grid-row: span 13;
}
</style>
