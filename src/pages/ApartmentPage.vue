<template>
  <div class="content">
    <MainContainer>
      <!-- <h2 class="title">ApartmentPage</h2> -->
      <ApartmentInfo :apartment="apartment" />
    </MainContainer>
  </div>
</template>

<script>
import MainContainer from "@/components/shared/MainContainer.vue";
import apartments from "@/mock/apartments";
import ApartmentInfo from "@/components/apartment/ApartmentInfo.vue";

export default {
  name: "ApartmentPage",
  components: { MainContainer, ApartmentInfo },
  computed: {
    apartment() {
      return apartments.find((item) => item.id === this.$route.params.id);
    },
  },
  mounted() {
    console.log("this.apartment --->", this.apartment);
    //console.log(this.$route);
  },
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
