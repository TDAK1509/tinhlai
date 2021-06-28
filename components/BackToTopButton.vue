<template>
  <button
    class="fixed rounded-full w-12 h-12 bg-blue-800 text-white text-lg transform rotate-90"
    style="right: 1rem; bottom: 1rem"
    v-on="$listeners"
  >
    &lt;
  </button>
</template>

<script>
export default {
  name: "BackToTopButton",
  inheritAttrs: false
};
</script>

<style >
</style>
