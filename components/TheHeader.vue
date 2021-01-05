<template>
  <div class="header mb-8 p-4 text-blue-800 text-center">
    <header class="mx-auto sm:max-w-screen-lg flex flex-wrap items-center">
      <img
        class="header__img order-1"
        src="@/assets/images/logo-50x50.png"
        alt="logo"
        width="50px"
        height="50px"
      />

      <h1
        class="header__title ml-0 sm:ml-8 mt-4 sm:mt-0 uppercase font-bold text-sm sm:text-2xl flex-grow order-3 sm:order-2"
      >
        {{ $t("headerTitle") }}
      </h1>

      <div
        class="order-2 sm:order-3 flex-grow sm:flex-grow-0 flex items-center justify-end"
      >
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
      </div>
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

@media screen and (max-width: 640px) {
  .header__title {
    flex-basis: 100%;
  }
}
</style>
