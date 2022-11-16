<template>
  <div class="apartment-info">
    <div class="apartment-info__header">
      <h2 class="apartment-info__title">{{ apartment.title }}</h2>
      <StarRating :rating="apartment.rating" />
    </div>
    <img :src="apartment.imgUrl" alt="" class="apartment-info__img" />
    <p class="apartment-info__descr">{{ apartment.descr }}</p>
    <PrimaryBtn type="submit" title="Забронювати" />
  </div>
</template>

<script>
import PrimaryBtn from "../shared/PrimaryBtn.vue";
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentInfo",
  components: { PrimaryBtn, StarRating },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.apartment-info {
  padding: 60px 0;
}

.apartment-info__header {
  margin-bottom: 20px;
}

.apartment-info__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: $primary-color;
}

.apartment-info__img {
  display: block;
  width: 730px;
  margin-bottom: 30px;
}

.apartment-info__descr {
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: $primary-color;
}
</style>
