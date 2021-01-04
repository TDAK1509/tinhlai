<template>
  <div>
    <label class="font-bold">{{ label }}</label
    ><br />
    <input
      :value="value"
      class="py-2 px-4 border border-gray-400 rounded-md"
      type="text"
      v-bind="$attrs"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",

  inheritAttrs: false,

  model: {
    prop: "value",
    event: "input"
  },

  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style>
</style>
