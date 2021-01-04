<template>
  <div>
    <label class="block font-bold mb-2">{{ label }}</label>
    <input
      :value="value"
      class="py-2 px-4 w-full border border-gray-400 rounded-md"
      type="text"
      v-bind="$attrs"
      v-on="inputListeners"
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

  computed: {
    inputListeners() {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>
