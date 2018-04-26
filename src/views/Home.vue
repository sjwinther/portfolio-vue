<template>
  <div class="fade-in">
    <div class="mb-12">
      <h1>Hi, I'm Sebastian</h1>
      <p>I'm a 24-year old student at the Digital Design and Communication MSc programme at the IT-University of Copenhagen.
        I like music, design, technology, and the occasional beer or five.
        And I co-founded a political party in Denmark called <a href="https://initiativet.dk" target="_blank" class="inline-link">Initiativet</a>.</p>
      <p>Do you want to get in touch? <span class="font-semibold text-teal mr-1">→</span><a href="mailto:sebastianwinther@gmail.com?subject=Let's get coffee" class="inline-link font-bold">Write me an email</a>.</p>
    </div>
    <div v-if="projects" class="fade-in">
      <h2 class="font-normal text-grey-darker text-xl mb-4">Projects</h2>
      <ul class="list-reset flex flex-wrap text-lg">
        <router-link v-for="(project, index) in projects" :to="'/project/' + project.uid" :key="index" tag="li" class="relative w-full sm:w-1/2 md:w-1/3 my-2">
          <a class="group block sm:inline-block font-bold bg-white rounded-sm shadow hover:shadow-lg px-4 p-3 sm:px-6">
            {{ project.data.title }}<span class="absolute pin-r sm:relative sm:pin-none inline-block text-teal transition group-hover:translate-x-1 ml-2 mr-4 sm:mr-0">→</span>
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
