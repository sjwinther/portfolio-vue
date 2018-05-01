<template>
  <div class="fade-in">
    <div class="py-12">
      <h1>Hi, I'm Sebastian</h1>
      <p class="mb-12">I'm a student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen. I enjoy designing digital interfaces and working with user experiences. Most of all I'm motivated by building stuff and learning from it.</p>
      <p>I'm available for work. Do you want to get in touch? <a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-block inline-link"><span class="mr-1">→</span>Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in py-12">
      <h2 class="font-normal text-xl mb-4">Selected projects ↓</h2>
      <ul class="grid list-reset lg:-mx-12 -mt-4">
        <li class="grid-item"></li>
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li" class="grid-item">
          <a class="group h-full flex flex-col justify-end overflow-hidden border border-black hover:translate-y--1">
            <div :style="'background-color: ' + project.data.color" class="flex-grow flex items-center justify-center">
              <img :src="project.data.preview.url" :alt="project.data.title" class="w-64">
            </div>
            <span class="relative block text-lg bg-white transition border-t border-black px-6 py-3">
            {{ project.data.type }}<span class="absolute pin-r text-blue transition group-hover:translate-x-2 mr-6">→</span>
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
