<template>
  <button :type="type" class="btnAccent">{{ title }}</button>
</template>

<script>
export default {
  name: "PrimaryBtn",
  props: {
    type: {
      type: String,
      default: "button",
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.btnAccent {
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 21px;
  border: none;
  color: $secondary-color;
  background-color: $accent-color;
}
</style>
