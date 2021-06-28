<template>
  <button
    class="fixed rounded-full w-12 h-12 flex items-center justify-center bg-black hover:bg-gray-500 text-white text-lg"
    style="right: 1rem; bottom: 1rem"
    v-on="$listeners"
  >
    <font-awesome-icon icon="chevron-up" />
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
