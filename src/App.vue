<template>
  <div id="app" class="min-h-screen flex items-center justify-center">
    <p class="font-bold text-5xl border-b-4 border-teal-lighter">{{ message }}</p>
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
