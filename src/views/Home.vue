<template>
  <div class="fade-in">
    <div class="mb-12">
      <h1>Hi, I'm Sebastian</h1>
      <p>I'm student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen. I like designing digital interfaces and working with user experiences, but most of all I'm motivated by building stuff and learning from it.
        I also co-founded a political party in Denmark called <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a>.</p>
      <p>Do you want to get in touch? <span class="text-blue mr-1">→</span><a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-link">Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in">
      <h2 class="font-normal text-xl mb-4">Projects ↓</h2>
      <ul class="grid list-reset lg:-mx-12 -mt-8">
        <li class="grid-item"></li>
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li" class="grid-item">
          <a class="group h-full flex flex-col justify-end overflow-hidden hover:translate-y--1">
            <div :style="'background-color: ' + project.data.color" class="flex-grow flex items-center justify-center">
              <h3 class="font-pt-serif text-2xl text-white">{{ project.data.title }}</h3>
            </div>
            <span class="relative block text-lg group-hover:text-blue bg-white border border-grey-light transition px-6 py-3">
            Let's go<span class="absolute pin-r text-blue transition  group-hover:translate-x-2 mr-6">→</span>
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
</style>
