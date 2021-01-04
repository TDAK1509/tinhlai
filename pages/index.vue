<template>
  <div class="container mx-auto">
    <CompoundInterestForm />

    <template v-for="(yearResult, index) in compoundInterestResults">
      <h1 :key="`table-title-${index}`">Năm {{ index + 1 }}</h1>
      <CompoundInterestTable :key="`table-${index}`" :data="yearResult" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompoundInterestForm from "@/components/CompoundInterestForm.vue";
import CompoundInterestTable from "@/components/CompoundInterestTable.vue";

export default Vue.extend({
  name: "Home",

  components: {
    CompoundInterestTable,
    CompoundInterestForm
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
