<template>
  <form class="w-96" @submit.prevent="submit">
    <text-field
      v-model="initialAmount"
      class="mb-4"
      label="Số tiền ban đầu"
      placeholder="1000000"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="monthlyAmount"
      class="mb-4"
      label="Số tiền hàng tháng"
      placeholder="1000000"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="interestRatePerYear"
      class="mb-4"
      label="Lãi suất năm (đơn vị %)"
      placeholder="15"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="years"
      class="mb-4"
      label="Số năm đầu tư"
      placeholder="5"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <button
      class="p-3 px-6 mt-2 border border-black rounded-lg bg-black text-white hover:bg-white hover:text-black"
    >
      Tính lãi kép
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/TextField.vue";
import CompoundInterestController, {
  CompoundInterestInfo
} from "@/utils/compound-interest";

export default Vue.extend({
  name: "CompoundInterestForm",

  components: {
    TextField
  },

  data() {
    return {
      initialAmount: "",
      monthlyAmount: "",
      interestRatePerYear: "",
      years: ""
    };
  },

  computed: {
    compoundInterestInfo(): CompoundInterestInfo {
      return {
        initialAmount: parseInt(this.initialAmount),
        monthlyAmount: parseInt(this.monthlyAmount),
        interestRatePerYear: parseInt(this.interestRatePerYear) / 100,
        years: parseInt(this.years)
      };
    }
  },

  methods: {
    submit() {
      const compoundInterestResult: number[][] = CompoundInterestController.calculate(
        this.compoundInterestInfo
      );
      this.$emit("submit", compoundInterestResult);
    }
  }
});
</script>

<style>
</style>
