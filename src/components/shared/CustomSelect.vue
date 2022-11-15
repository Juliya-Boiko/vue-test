<template>
  <select class="custom-select">
    <option
      v-for="item in formatedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-select {
  width: 220px;
  border: 2px solid $accent-color;
  font-size: 18px;
  outline: none;
  padding: 11px 20px;
  cursor: pointer;
  display: inline-block;
}
</style>
