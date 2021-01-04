<template>
  <div class="container mx-auto">
    <compound-interest-table />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompoundInterestTable from "@/components/CompoundInterestTable.vue";

export default Vue.extend({
  name: "Home",

  components: {
    CompoundInterestTable
  }
});
</script>
