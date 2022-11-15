<template>
  <MainContainer>
    <div class="apartments-list">
      <ApartmentItem
        v-for="{ id, imgUrl, descr, price, rating } in items"
        :key="id"
        :imgUrl="imgUrl"
        :description="descr"
        :price="price"
        :rating="rating"
        class="apartments-list__item"
      />
    </div>
  </MainContainer>
</template>

<script>
import ApartmentItem from "./ApartmentItem.vue";
import MainContainer from "../shared/MainContainer.vue";
export default {
  name: "ApartmentsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ApartmentItem,
    MainContainer,
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  //margin-left: -15px;
  //margin-right: -15px;
}

.apartments-list__item {
  margin: 15px;
}
</style>
