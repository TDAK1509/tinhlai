<template>
  <div>
    <label class="font-bold">{{ label }}</label
    ><br />
    <input class="py-2 px-4 border border-gray-400 rounded-md" type="text" />
  </div>
</template>

<script>
export default {
  name: "TextField",

  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
