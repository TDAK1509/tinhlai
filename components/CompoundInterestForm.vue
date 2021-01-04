<template>
  <form @submit.prevent="submit">
    <text-field v-model="initialAmount" class="mb-4" label="Số tiền ban đầu" />
    <text-field
      v-model="monthlyAmount"
      class="mb-4"
      label="Số tiền hàng tháng"
    />
    <text-field v-model="interestRate" class="mb-4" label="Lãi suất năm" />
    <text-field v-model="years" class="mb-4" label="Số năm đầu tư" />
    <button
      class="p-3 border border-black rounded-lg bg-black text-white hover:bg-white hover:text-black"
    >
      Tính lãi kép
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/TextField.vue";
import { CompoundInterestInfo } from "@/utils/compound-interest";

export default Vue.extend({
  name: "CompoundInterestForm",

  components: {
    TextField
  },

  data() {
    return {
      initialAmount: "aaa",
      monthlyAmount: "",
      interestRate: "",
      years: ""
    };
  },

  computed: {
    compoundInterestInfo(): CompoundInterestInfo {
      return {
        initialAmount: parseInt(this.initialAmount),
        monthlyAmount: parseInt(this.monthlyAmount),
        interestRate: parseInt(this.interestRate),
        years: parseInt(this.years)
      };
    }
  },

  methods: {
    submit() {
      console.log("submitted", this.compoundInterestInfo);
    }
  }
});
</script>

<style>
</style>
