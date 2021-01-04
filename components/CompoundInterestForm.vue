<template>
  <form @submit.prevent="submit">
    <text-field
      v-model="initialAmount"
      class="mb-4"
      label="Số tiền ban đầu"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="monthlyAmount"
      class="mb-4"
      label="Số tiền hàng tháng"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="interestRate"
      class="mb-4"
      label="Lãi suất năm"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
    <text-field
      v-model="years"
      class="mb-4"
      label="Số năm đầu tư"
      required
      pattern="[0-9]+"
      title="Vui lòng chỉ điền số"
    />
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
      initialAmount: "",
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
