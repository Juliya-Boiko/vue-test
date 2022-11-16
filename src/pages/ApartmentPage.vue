<template>
  <div class="content">
    <MainContainer>
      <h2 class="title">ApartmentPage</h2>
    </MainContainer>
  </div>
</template>

<script>
import MainContainer from "@/components/shared/MainContainer.vue";

export default {
  name: "ApartmentPage",
  components: { MainContainer },
};
</script>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
  padding-bottom: 100px;
}
.title {
  font-size: 30px;
  color: red;
}
</style>
