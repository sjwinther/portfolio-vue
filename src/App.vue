<template>
  <div id="app" class="min-h-screen flex flex-col">

    <nav class="border-b border-grey-lighter p-4">

      <ul class="text-center list-reset">
        <router-link v-for="link in routerlinks" :to="link.path" :key="link.index" tag="li" class="inline-block text-grey-darker mx-1">
          <a class="hover:bg-grey-lighter rounded p-2">{{ link.name }}</a>
        </router-link>
      </ul>

    </nav>

    <div class="flex-auto flex items-center justify-center text-center">

      <router-view />

    </div>

  </div>
</template>

<script>
import routes from './router';
const routerlinks = routes.options.routes;

export default {
  metaInfo: {
    titleTemplate: title => {
      return title ? `${title} | Sebastian Winther` : 'Sebastian Winther';
    }
  },
  data() {
    return {
      routerlinks
    };
  }
};
</script>

<style>
@tailwind preflight;
@tailwind utilities;

#app {
  animation: 1.2s fade-in;
  @apply .font-plex-sans .antialiased .text-black;
}
nav .router-link-exact-active a {
  @apply .text-black;
}
.router-view {
  animation: 0.6s fade-in;
}
a {
  @apply .text-inherit .no-underline;
}
a,
button {
  transition: 0.2s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  ,
  to {
    opacity: 1;
  }
}
</style>
