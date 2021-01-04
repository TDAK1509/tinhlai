<template>
  <div class="header mb-8 p-4 text-blue-800 text-center">
    <header class="inline-flex items-center">
      <img class="header__img" src="@/assets/logo.png" alt="logo" />
      <h1 class="ml-8 uppercase font-bold text-2xl">
        Công cụ tính tiền khi đầu tư với lãi kép
      </h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #bbbbbb;
}

.header__img {
  object-fit: cover;
  width: 50px;
  height: 50px;
}
</style>
