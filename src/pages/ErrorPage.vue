<template>
  <section class="error">
    <h1 class="error__title">Page not found</h1>
  </section>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error {
  flex-grow: 1;
}
.error__title {
  font-size: 60px;
  text-align: center;
  color: red;
}
</style>
