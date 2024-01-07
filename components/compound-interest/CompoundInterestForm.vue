<template>
  <form class="w-96" @submit.prevent="onClickSubmit">
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

<script lang="ts" setup>
import CompoundInterestController, {
  CompoundInterestInfo,
} from "@/models/compound-interest";

const route = useRoute();

const emit = defineEmits<{
  submit: [compoundInterestResultTable: number[][]];
}>();

const initialAmount = ref(0);
const monthlyAmount = ref(0);
const interestRatePerYear = ref(0);
const years = ref(0);

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
  initialAmount.value = parseInt(route.query.initialAmount as string) || 0;
  monthlyAmount.value = parseInt(route.query.monthlyAmount as string) || 0;
  interestRatePerYear.value =
    parseInt(route.query.interestRatePerYear as string) || 0;
  years.value = parseInt(route.query.years as string) || 0;
}

function submitForm() {
  const compoundInterestInfo: CompoundInterestInfo = {
    initialAmount: initialAmount.value,
    monthlyAmount: monthlyAmount.value,
    interestRatePerYear: interestRatePerYear.value / 100,
    years: years.value,
  };
  const compoundInterestResult: number[][] =
    CompoundInterestController.calculate(compoundInterestInfo);
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
