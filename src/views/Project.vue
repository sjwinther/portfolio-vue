<template>
  <div class="router-view">
    <p class="font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter m-4">{{ message }}</p>
  </div>
</template>

<script>
const title = 'Project';

export default {
  name: title,
  metaInfo: {
    title: title
  },
  data() {
    return {
      message: 'Project'
    };
  }
};
</script>

<style>

</style>
