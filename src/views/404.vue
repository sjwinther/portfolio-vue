<template>
  <div class="router-view text-center">
    <h1 class="inline-block font-bold text-4xl sm:text-5xl border-b-4 border-teal mt-12 mb-8">Missing Page</h1>
  </div>
</template>

<script>
export default {
  name: 'MissingPage',
  methods: {
    redirect() {
      return this.$router.push('/404');
    }
  },
  beforeMount() {
    this.redirect();
  }
};
</script>

<style>

</style>
