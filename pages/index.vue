<template>
  <div id="main" class="px-4 mb-4 sm:px-0 mx-auto sm:max-w-screen-lg">
    <BackToTopButton @click="goToTop()" />
    <CompoundInterestForm @submit="onCalculate" />

    <template v-if="hasResult">
      <h4
        class="my-8 p-4 uppercase font-bold text-xl text-center text-blue-800 border-t-2 border-gray-200"
      >
        {{ $t("resultTable") }}
      </h4>

      <div
        class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center"
      >
        <div
          v-for="(yearResult, index) in compoundInterestResult"
          :key="index"
          class="w-full sm:max-w-xs"
        >
          <h4 class="uppercase font-bold mb-2">
            {{ $t("year") }} {{ index + 1 }}
          </h4>
          <CompoundInterestTable :data="yearResult" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompoundInterestForm from "@/components/CompoundInterestForm.vue";
import CompoundInterestTable from "@/components/CompoundInterestTable.vue";
import BackToTopButton from "@/components/BackToTopButton.vue";

export default Vue.extend({
  name: "Home",

  components: {
    CompoundInterestTable,
    CompoundInterestForm,
    BackToTopButton
  },

  data() {
    return {
      compoundInterestResult: [] as number[][]
    };
  },

  computed: {
    hasResult(): boolean {
      return this.compoundInterestResult.length > 0;
    }
  },

  methods: {
    async onCalculate(compoundInterestResult: number[][]) {
      this.compoundInterestResult = compoundInterestResult;
      await Vue.nextTick();
    },

    goToTop() {
      document.getElementById("main")!.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});
</script>
