<template>
  <div class="container mx-auto">
    <compound-interest-table :data="compoundInterestYearResult" />
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
      compoundInterestYearResult: [10000, 20000, 30000]
    };
  }
});
</script>
