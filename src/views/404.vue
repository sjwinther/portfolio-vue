<template>
  <div class="router-view text-center">
    <h1>Missing Page</h1>
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
