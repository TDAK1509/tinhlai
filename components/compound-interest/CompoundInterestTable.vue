<template>
  <table class="border-collapse w-full">
    <thead>
      <tr>
        <th :class="thClasses">{{ $t("month") }}</th>
        <th :class="thClasses">{{ $t("amount") }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(monthFinalAmount, index) in data" :key="index">
        <td :class="tdClasses">{{ index + 1 }}</td>
        <td :class="tdClasses">
          {{ new Intl.NumberFormat().format(monthFinalAmount) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
defineProps<{
  data: number[];
}>();

const thClasses =
  "py-2 px-4 border border-cyan-800 text-left bg-cyan-800 text-white";
const tdClasses = "py-2 px-4 border border-cyan-800";
</script>
