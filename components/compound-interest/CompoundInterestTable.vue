<template>
  <table class="border-collapse w-full">
    <thead>
      <tr>
        <th :class="thClasses">Tháng</th>
        <th :class="thClasses">Số tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(monthFinalAmount, index) in data" :key="index">
        <td :class="tdClasses">{{ index + 1 }}</td>
        <td :class="tdClasses">{{ monthFinalAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
defineProps<{
  data: number[];
}>();

const thClasses =
  "py-2 px-4 border border-blue-800 text-left bg-blue-800 text-white";
const tdClasses = "py-2 px-4 border border-blue-800";
</script>
