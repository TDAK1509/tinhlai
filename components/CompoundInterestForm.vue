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

  mounted() {
    this.setFormInputsFromQueryParams();
  },

  methods: {
    setFormInputsFromQueryParams() {
      const {
        initialAmount,
        monthlyAmount,
        interestRatePerYear,
        years
      } = this.$route.query;

      this.initialAmount = (initialAmount as string) || "";
      this.monthlyAmount = (monthlyAmount as string) || "";
      this.interestRatePerYear = (interestRatePerYear as string) || "";
      this.years = (years as string) || "";
    },

    submit() {
      const compoundInterestResult: number[][] = CompoundInterestController.calculate(
        this.compoundInterestInfo
      );
      this.$emit("submit", compoundInterestResult);
      this.sendClickEventToGoogleAnalytics();
      this.sendToUsergram();
      this.addParamsToUrl();
    },

    sendClickEventToGoogleAnalytics() {
      this.$ga.event({
        eventCategory: "tinhlai",
        eventAction: "click",
        eventLabel: "clicked-calculate"
      });
    },

    sendToUsergram() {
      this.$usergram.sendUse();
    },

    addParamsToUrl() {
      const formInputs = {
        initialAmount: this.initialAmount,
        monthlyAmount: this.monthlyAmount,
        interestRatePerYear: this.interestRatePerYear,
        years: this.years
      };
      const url =
        location.pathname + "?" + new URLSearchParams(formInputs).toString();
      history.replaceState(history.state, "", url);
    }
  }
});
</script>

<style>
</style>
