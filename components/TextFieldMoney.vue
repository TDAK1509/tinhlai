<template>
  <div>
    <label class="block font-bold mb-2">{{ label }}</label>
    <input
      class="py-2 px-4 w-full border border-gray-400 rounded-md"
      type="tel"
      v-bind="$attrs"
    />
    <span class="italic text-sm text-gray-500">{{ attrs.modelValue }}</span>
  </div>
</template>

<script lang="ts" setup>
import { addCommaSeparatorsToNumber } from "@/utils/filters";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  label: string;
}>();

const attrs = useAttrs();
</script>
