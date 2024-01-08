<template>
  <TheHeader />

  <main id="main" class="px-4 mb-4 sm:px-0 mx-auto sm:max-w-screen-lg">
    <CompoundInterestForm @submit="onCalculate" />

    <template v-if="hasResult">
      <h4
        id="result"
        class="my-8 p-4 uppercase font-bold text-xl text-center text-cyan-800 border-t-2 border-gray-200"
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
  </main>
</template>

<script lang="ts" setup>
const compoundInterestResult: Ref<number[][]> = ref([]);

const hasResult = computed(() => compoundInterestResult.value.length > 0);

async function onCalculate(result: number[][]) {
  compoundInterestResult.value = result;
  await nextTick();

  document.getElementById("result")!.scrollIntoView({
    behavior: "smooth",
  });
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap");

:root {
  font-size: 16px;
}

html {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
}

input {
  font-size: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>