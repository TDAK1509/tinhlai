<template>
  <div class="container mx-auto">
    <CompoundInterestForm @submit="onCalculate" />

    <template v-for="(yearResult, index) in compoundInterestResult">
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
      compoundInterestResult: [] as number[][]
    };
  },

  methods: {
    async onCalculate(compoundInterestResult: number[][]) {
      this.compoundInterestResult = compoundInterestResult;
      await Vue.nextTick();
    }
  }
});
</script>
