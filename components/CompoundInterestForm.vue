<template>
  <form>
    <text-field class="mb-4" label="Số tiền ban đầu" />
    <text-field class="mb-4" label="Số tiền hàng tháng" />
    <text-field class="mb-4" label="Lãi suất năm" />
    <text-field class="mb-4" label="Số năm đầu tư" />
  </form>
</template>

<script>
import TextField from "@/components/TextField.vue";

export default {
  name: "CompoundInterestForm",

  components: {
    TextField
  }
};
</script>

<style>
</style>
