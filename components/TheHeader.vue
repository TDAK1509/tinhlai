<template>
  <header class="header">
    <img
      class="header__img"
      src="@/assets/images/logo-50x50.png"
      alt="logo"
      width="50px"
      height="50px"
    />

    <h1 class="header__title">
      {{ $t("headerTitle") }}
    </h1>

    <div class="header__languages">
      <NuxtLink :to="switchLocalePath('vn')">
        <img
          src="@/assets/images/flag-vn.svg"
          alt="Tiếng Việt"
          title="Tiếng Việt"
          width="30"
          height="20"
        />
      </NuxtLink>

      <NuxtLink :to="switchLocalePath('en')">
        <img
          src="@/assets/images/flag-en.svg"
          alt="English"
          title="English"
          width="30"
          height="20"
        />
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
.header {
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.header__img {
  object-fit: cover;
}

.header__languages {
  display: flex;
}

@media screen and (max-width: 640px) {
  .header__title {
    flex-basis: 100%;
  }
}
</style>
