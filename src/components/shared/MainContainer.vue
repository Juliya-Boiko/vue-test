<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
