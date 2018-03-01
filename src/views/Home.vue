<template>
  <div class="router-view">
    <p class="font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter mb-8">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello Home'
    };
  }
};
</script>

<style>

</style>
