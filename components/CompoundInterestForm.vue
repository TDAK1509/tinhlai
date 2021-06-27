<template>
  <form class="w-96" @submit.prevent="submit">
    <TextFieldMoney
      v-model="initialAmount"
      class="mb-4"
      :label="$t('formInitialAmount')"
      placeholder="1000000"
      required
      pattern="[0-9]+"
      :title="$t('formNumberOnly')"
    />
    <TextFieldMoney
      v-model="monthlyAmount"
      class="mb-4"
      :label="$t('formMonthlyAmount')"
      placeholder="1000000"
      required
      pattern="[0-9]+"
      :title="$t('formNumberOnly')"
    />
    <TextField
      v-model="interestRatePerYear"
      class="mb-4"
      :label="$t('formInterestRate')"
      type="tel"
      placeholder="15"
      required
      pattern="[0-9]+"
      :title="$t('formNumberOnly')"
    />
    <TextField
      v-model="years"
      class="mb-4"
      :label="$t('formYears')"
      type="tel"
      placeholder="5"
      required
      pattern="[0-9]+"
      :title="$t('formNumberOnly')"
    />
    <button
      class="p-3 px-6 mt-2 border border-black rounded-lg bg-blue-800 uppercase text-white hover:bg-blue-600"
    >
      {{ $t("formCalculate") }}
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import CompoundInterestController, {
  CompoundInterestInfo
} from "@/utils/compound-interest";

export default Vue.extend({
  name: "CompoundInterestForm",

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
      this.sendClickEventToGoogleAnalytics();
    },

    sendClickEventToGoogleAnalytics() {
      this.$ga.event({
        eventCategory: "tinhlai",
        eventAction: "click",
        eventLabel: "clicked-calculate"
      });
    }
  }
});
</script>

<style>
</style>
