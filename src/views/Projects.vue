<template>
  <div class="router-view">
    <bold-headline>{{ message }}</bold-headline>
  </div>
</template>

<script>
import BoldHeadline from '../components/BoldHeadline';
const title = 'Projects';

export default {
  name: title,
  metaInfo: {
    title: title
  },
  data() {
    return {
      message: 'Hello Projects'
    };
  },
  components: {
    BoldHeadline
  }
};
</script>

<style>

</style>
