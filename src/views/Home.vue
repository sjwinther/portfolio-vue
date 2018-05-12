<template>
  <div class="fade-in">
    <div class="py-6 sm:py-12">
      <h1>Hi, I'm Sebastian</h1>
      <p class="sm:text-xl max-w-lg -mt-4 sm:mt-0 mb-8 sm:mb-12">I'm a student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen. I enjoy designing digital interfaces and working with user experiences. I'm motivated by building stuff and learning from it.</p>
      <p class="sm:text-xl max-w-lg">I'm available for work. Do you want to get in touch? <a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-block inline-link"><span class="mr-1">→</span>Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in py-6 sm:py-12">
      <h2 class="font-normal text-xl mb-4">Selected projects ↓</h2>
      <ul class="grid list-reset lg:-mx-12 -mt-4">
        <li class="grid-item"></li>
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li" class="grid-item">
          <a class="group h-full flex flex-col justify-end rounded-sm shadow hover:shadow-lg overflow-hidden hover:translate-y--1">
            <div :style="'background-color: ' + project.data.color + ';'" class="flex-grow flex items-center justify-center">
              <img :src="project.data.preview.url" :alt="project.data.title" class="w-64">
            </div>
            <span class="relative block bg-white transition px-6 py-3">
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

</style>
