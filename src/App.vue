<template>
  <div id="app" class="min-h-screen flex flex-col">

    <nav class="fixed pin-x pin-t border-b border-grey-lighter p-4">
      <div class="absolute pin-y pin-l p-4">
        S<span class="hidden sm:inline">ebastian </span>W<span class="hidden sm:inline">inther</span>
      </div>
      <ul class="text-center list-reset">
        <router-link to="/" tag="li" class="inline-block text-black">
          <a class="font-bold hover:bg-grey-lighter rounded p-2">← Home</a>
        </router-link>
      </ul>
      <div class="hidden sm:block absolute pin-y pin-r p-4">
        Digital Designer
      </div>
    </nav>

    <div class="flex-auto flex items-center justify-center">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: title => {
      return title ? `${title} | Sebastian Winther - Digital Designer` : 'Sebastian Winther - Digital Designer';
    }
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
  @apply .text-transparent;
}
nav .router-link-exact-active a:hover {
  @apply .bg-transparent;
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
