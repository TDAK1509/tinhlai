<template>
  <div class="header mb-8 p-4 text-blue-800 text-center">
    <header
      class="mx-auto sm:max-w-screen-lg flex justify-between items-center"
    >
      <img
        class="header__img"
        src="@/assets/images/logo-50x50.png"
        alt="logo"
        width="50px"
        height="50px"
      />

      <h1 class="ml-8 uppercase font-bold text-2xl flex-1">
        {{ $t("headerTitle") }}
      </h1>

      <nuxt-link :to="switchLocalePath('vn')">
        <img
          src="@/assets/images/flag-vn.svg"
          alt="Tiếng Việt"
          title="Tiếng Việt"
          :width="flagWidth"
          :height="flagHeight"
        />
      </nuxt-link>

      <nuxt-link :to="switchLocalePath('en')" class="ml-4">
        <img
          src="@/assets/images/flag-en.svg"
          alt="English"
          title="English"
          :width="flagWidth"
          :height="flagHeight"
        />
      </nuxt-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      flagWidth: 30,
      flagHeight: 20
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #bbbbbb;
}

.header__img {
  object-fit: cover;
}
</style>
