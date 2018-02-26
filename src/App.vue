<template>
  <div id="app" class="min-h-screen flex items-center justify-center">
    <p class="text-5xl">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello portfolio.'
    };
  }
};
</script>

<style>
@tailwind preflight;
@tailwind utilities;

#app {
  @apply .font-sans .antialiased .text-black;
}
</style>
