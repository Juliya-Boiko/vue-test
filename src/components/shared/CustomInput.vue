<template>
  <!-- <input v-bind="attrs" /> -->
  <input
    placeholder="Вартість, від"
    class="custom-input"
    :value="price"
    @input="$emit('update:price', $event.target.value)"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    price: {
      type: String,
    },
  },
  emits: ["update:price"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-input {
  padding: 10px 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: $primary-color;
  background: $secondary-color;
  border: 2px solid $accent-color;

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: $primary-color;
  }
}
</style>
