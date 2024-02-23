<template>
  <main id="main" class="px-4 mb-4 sm:px-0 mx-auto sm:max-w-screen-lg">
    <CopyLinkButton v-if="hasResult" @click="copyUrl()" />
    <BackToTopButton v-show="shouldShowBackToTopButton" @click="goToTop()" />
    <CompoundInterestForm ref="form" @submit="onCalculate" />

    <template v-if="hasResult">
      <h4
        id="result"
        ref="resultTable"
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
const { t } = useI18n();
const snackbar = useSnackbar();

const compoundInterestResult: Ref<number[][]> = ref([]);

const hasResult = computed(() => compoundInterestResult.value.length > 0);

const form: Ref<HTMLElement | null> = ref(null);
const shouldShowBackToTopButton = ref(false);

useIntersectionObserver(form, ([{ isIntersecting }]) => {
  shouldShowBackToTopButton.value = !isIntersecting;
});

async function onCalculate(result: number[][]) {
  compoundInterestResult.value = result;
  await nextTick();

  document.getElementById("result")!.scrollIntoView({
    behavior: "smooth",
  });
}

function goToTop() {
  document.getElementById("main")!.scrollIntoView({
    behavior: "smooth",
  });
}

function copyUrl() {
  navigator.clipboard.writeText(location.href);
  snackbar.add({
    type: "success",
    text: t("urlCopiedToClipboard"),
  });
}
</script>