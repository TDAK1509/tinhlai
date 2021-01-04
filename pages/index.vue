<template>
  <div class="container mx-auto">
    <compound-interest-table
      v-for="(yearResult, index) in compoundInterestResults"
      :key="index"
      :data="yearResult"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompoundInterestTable from "@/components/CompoundInterestTable.vue";

export default Vue.extend({
  name: "Home",

  components: {
    CompoundInterestTable
  },

  data() {
    return {
      compoundInterestResults: [
        [10000, 20000, 30000],
        [10000, 20000, 30000],
        [10000, 20000, 30000]
      ] as number[][]
    };
  }
});
</script>
