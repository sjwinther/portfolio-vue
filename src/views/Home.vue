<template>
  <div class="fade-in">
    <div class="py-6 sm:py-12">
      <h1 class="leading-tight text-4xl">Hi, I'm Sebastian. 👋 I'm a freelance UX designer and frontend developer.</h1>
      <p class="sm:text-xl leading-relaxed max-w-lg -mt-4 sm:mt-0 mb-8 sm:mb-12"></p>
      <p class="sm:text-xl leading-relaxed max-w-lg">I sketch products, think products, design products, prototype products, and build products – mostly in React. I'm available for freelance work from January. Do you want to work together? <a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-block inline-link"><span class="mr-1">→</span>Write me an email</a>.
      </p>
    </div>
    <div v-if="projects" class="fade-in py-6 sm:py-12">
      <h2 class="font-normal text-xl mb-4">Projects I've worked on ↓</h2>
      <ul class="grid list-reset lg:-mx-12 -mt-4">
        <li class="grid-item"></li>
        <li class="grid-item">
          <a href="https://www.odysia.dk" target="_odysia" rel="noopener" class="group h-full flex flex-col justify-end rounded-sm shadow hover:shadow-lg overflow-hidden hover:translate-y--1">
            <div style="background-color: #001B36" class="flex-grow flex items-center justify-center">
              <img src="/public/static/odysia-logo.png" alt="Tales from Odysïa" class="w-64">
            </div>
            <span class="relative block bg-white transition px-6 py-3">
            Website design & development<span class="absolute pin-r text-blue transition rotate--45 group-hover:translate-x-2-rotate--45 mr-6">→</span>
            </span>
          </a>
        </li>
        <li class="grid-item">
          <a href="https://www.pelion.app" target="_pelion" rel="noopener" class="group h-full flex flex-col justify-end rounded-sm shadow hover:shadow-lg overflow-hidden hover:translate-y--1">
            <div style="background-color: white" class="flex-grow flex items-center justify-center">
              <img src="/public/static/pelion-logo.svg" alt="Pelion" class="w-48">
            </div>
            <span class="relative block bg-white transition px-6 py-3">
            Product design & development<span class="absolute pin-r text-blue transition rotate--45 group-hover:translate-x-2-rotate--45 mr-6">→</span>
            </span>
          </a>
        </li>
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
  props: ["projects"]
};
</script>
