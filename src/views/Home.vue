<template>
  <div class="router-view">
    <h1 class="inline-block font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter mt-12 mb-8">{{ $route.name }}</h1>
    <ul class="list-reset">
      <router-link v-for="project in projects" :to="'/project/' + project.uid" :key="project.index" tag="li"><a class="group inline-block font-bold text-lg sm:text-xl border-b-2 border-teal-lightest hover:border-teal-lighter my-2">{{ project.data.title[0].text }} <span class="text-teal-lightest group-hover:text-teal-lighter transition">→</span></a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['projects'],
  name: 'Home'
};
</script>

<style>

</style>
