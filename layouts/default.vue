<template>
  <TheHeader />
  <slot></slot>
  <TheFooter />
</template>

<style>
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