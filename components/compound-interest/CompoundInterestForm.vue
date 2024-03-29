<template>
  <form class="w-full" @submit.prevent="onClickSubmit">
    <TextFieldMoney
      v-model="initialAmount"
      class="mb-4"
      :label="$t('formInitialAmount')"
      placeholder="1000000"
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
    <div class="flex gap-2 mb-4">
      <QuickButton
        v-for="interestRate in ['5', '10', '12', '15', '20']"
        :key="`quick-button-interest-rate-${interestRate}`"
        type="button"
        @click="interestRatePerYear = interestRate"
        >{{ interestRate }}%</QuickButton
      >
    </div>
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
    <div class="flex gap-2 mb-4">
      <QuickButton
        v-for="year in ['5', '10', '15', '20', '25']"
        :key="`quick-button-year-${year}`"
        type="button"
        @click="years = year"
        >{{ year }}</QuickButton
      >
    </div>
    <button
      class="p-3 px-6 mt-2 border border-black rounded-lg bg-cyan-800 uppercase text-white hover:bg-cyan-600"
    >
      {{ $t("formCalculate") }}
    </button>
  </form>
</template>

<script lang="ts" setup>
import CompoundInterest from "@/models/compound-interest";

const route = useRoute();

const emit = defineEmits<{
  submit: [compoundInterestResultTable: number[][]];
}>();

const initialAmount = ref("");
const monthlyAmount = ref("");
const interestRatePerYear = ref("");
const years = ref("");

const formIsReady: ComputedRef<Boolean> = computed(
  () => !!monthlyAmount.value && !!interestRatePerYear.value && !!years.value
);

onMounted(() => {
  setFormInputsFromQueryParams();

  if (formIsReady.value) {
    submitForm();
  }
});

function setFormInputsFromQueryParams() {
  initialAmount.value = (route.query.initialAmount as string) || "";
  monthlyAmount.value = (route.query.monthlyAmount as string) || "";
  interestRatePerYear.value = (route.query.interestRatePerYear as string) || "";
  years.value = (route.query.years as string) || "";
}

function submitForm() {
  const compoundInterestResult: number[][] = CompoundInterest.calculate(
    parseInt(initialAmount.value) || 0,
    parseInt(monthlyAmount.value),
    parseInt(interestRatePerYear.value) / 100,
    parseInt(years.value)
  );
  emit("submit", compoundInterestResult);
}

function onClickSubmit() {
  submitForm();
  addParamsToUrl();
}
function addParamsToUrl() {
  const formInputs = {
    initialAmount: initialAmount.value.toString(),
    monthlyAmount: monthlyAmount.value.toString(),
    interestRatePerYear: interestRatePerYear.value.toString(),
    years: years.value.toString(),
  };
  const url =
    location.pathname + "?" + new URLSearchParams(formInputs).toString();
  history.replaceState(history.state, "", url);
}
</script>
