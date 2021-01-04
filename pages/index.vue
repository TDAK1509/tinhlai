<template>
  <div>
    <h1
      class="mb-4 p-4 uppercase font-bold text-2xl text-center bg-yellow-900 text-white"
    >
      Công cụ tính tiền khi đầu tư với lãi kép
    </h1>

    <div class="mx-4 sm:mx-0">
      <CompoundInterestForm @submit="onCalculate" />

      <div
        class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center"
      >
        <div
          v-for="(yearResult, index) in compoundInterestResult"
          :key="index"
          class="w-full"
        >
          <h1>Năm {{ index + 1 }}</h1>
          <CompoundInterestTable :data="yearResult" />
        </div>
      </div>
    </div>
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
