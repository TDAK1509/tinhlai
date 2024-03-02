<template>
  <div>
    <label class="block font-bold mb-2">{{ label }}</label>
    <input
      :value="modelValue"
      @input="onInput"
      class="py-2 px-4 w-full border border-gray-700 rounded-md"
      v-bind="$attrs"
    />
  </div>
</template>


<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  modelValue: string;
  label: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function onInput(e: KeyboardEvent) {
  if (e.target) emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>
