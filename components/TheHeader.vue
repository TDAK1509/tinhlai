<template>
  <div class="header">
    <header>
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

      <div>
        <nuxt-link :to="switchLocalePath('vn')">
          <img
            src="@/assets/images/flag-vn.svg"
            alt="Tiếng Việt"
            title="Tiếng Việt"
            width="30"
            height="20"
          />
        </nuxt-link>

        <nuxt-link :to="switchLocalePath('en')" class="ml-4">
          <img
            src="@/assets/images/flag-en.svg"
            alt="English"
            title="English"
            width="30"
            height="20"
          />
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #bbbbbb;
}

.header__img {
  object-fit: cover;
}

@media screen and (max-width: 640px) {
  .header__title {
    flex-basis: 100%;
  }
}
</style>
