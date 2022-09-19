<template>
  <div class="">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    this.$usergram.sendPageView();
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap");

:root {
  font-size: 16px;
}

html {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
}

input {
  font-size: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
