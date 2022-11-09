<template>
  <button :type="type" class="btnAccent">Вхід</button>
</template>

<script>
export default {
  name: "PrimaryBtn",
  props: {
    type: {
      type: String,
      default: "button",
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btnAccent {
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 21px;
  border: none;
  color: #ffffff;
  background-color: #ff662d;
}
.test {
  background-color: aqua;
}
</style>
