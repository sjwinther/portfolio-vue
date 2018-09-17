<template>
  <div class="router-view text-center">
    <h1>404</h1>
    <p class="mx-auto">Hey uuuh ... There's no page here. Sorry.</p>
  </div>
</template>

<script>
export default {
  name: "MissingPage",
  metaInfo: {
    title: "404"
  },
  methods: {
    redirect() {
      return this.$router.push("/404");
    }
  },
  beforeMount() {
    this.redirect();
  }
};
</script>
