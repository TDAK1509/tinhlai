<template>
  <table class="table-auto border-collapse">
    <thead>
      <tr>
        <th class="border border-black">Tháng</th>
        <th class="border border-black">Số tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(monthFinalAmount, index) in data" :key="index">
        <td class="border border-black">{{ index + 1 }}</td>
        <td class="border border-black">{{ monthFinalAmount | money }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompoundInterestTable",

  filters: {
    money(amount: number) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  }
});
</script>
