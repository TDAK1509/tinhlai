<template>
  <TheHeader />
  <div id="main" class="px-4 mb-4 sm:px-0 mx-auto sm:max-w-screen-lg">
    <CompoundInterestForm @submit="onCalculate" />
  </div>
</template>

<script lang="ts" setup>
function onCalculate(event: unknown) {
  console.log(event);
}
</script>