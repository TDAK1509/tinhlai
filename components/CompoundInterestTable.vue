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
        <td :class="tdClasses">{{ monthFinalAmount | money }}</td>
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
      const roundedAmount = Math.round(amount);
      return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
    return {
      thClasses: "py-2 px-4 border border-black text-left bg-black text-white",
      tdClasses: "py-2 px-4 border border-black"
    };
  }
});
</script>
