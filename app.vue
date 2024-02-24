<template>
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NuxtSnackbar />
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
  ],
});
</script>