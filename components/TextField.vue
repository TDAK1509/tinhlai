<template>
  <div>
    <label class="block font-bold mb-2">{{ label }}</label>
    <input
      class="py-2 px-4 w-full border border-gray-400 rounded-md"
      v-bind="$attrs"
    />
  </div>
</template>


<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  label: string;
}>();
</script>
