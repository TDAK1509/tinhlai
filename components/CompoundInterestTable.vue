<template>
  <table class="table-auto border-collapse">
    <thead>
      <tr>
        <th class="border border-black">Tháng</th>
        <th class="border border-black">Số tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(monthFinalAmount, index) in compoundInterestYearResult"
        :key="index"
      >
        <td class="border border-black">{{ index + 1 }}</td>
        <td class="border border-black">{{ monthFinalAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompoundInterestTable",

  data() {
    return {
      compoundInterestYearResult: [10000, 20000, 30000]
    };
  }
});
</script>
