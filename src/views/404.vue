<template>
  <div class="router-view">
    <div class="text-center my-12">
        <p class="inline-block font-bold text-3xl sm:text-5xl border-b-4 border-teal-lighter">Missing Page</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Missing Page',
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
