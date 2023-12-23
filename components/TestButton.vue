<template>
   <p>{{ $t('welcome') }}</p>
  <p>Clicked: {{ clicked }}</p>
  <button @click="clicked++">Click me</button>
</template>

<script setup lang="ts">
const clicked = ref(0);
</script>