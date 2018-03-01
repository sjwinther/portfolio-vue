<template>
  <div class="router-view">
    <bold-headline>{{ message }}</bold-headline>
  </div>
</template>

<script>
import BoldHeadline from '../components/BoldHeadline';
const title = 'Contact';

export default {
  name: title,
  metaInfo: {
    title: title
  },
  data() {
    return {
      message: 'Hello Contact'
    };
  },
  components: {
    BoldHeadline
  }
};
</script>

<style>

</style>
