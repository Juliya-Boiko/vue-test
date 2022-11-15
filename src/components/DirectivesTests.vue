<template>
  <div v-if="isVisisble">
    <h1>Directives tests</h1>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'kiwi'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectiveTests",
  data() {
    return {
      isVisisble: true,
      fruits: ["apple", "kiwi", "peach"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
