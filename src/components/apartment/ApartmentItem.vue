<template>
  <div class="apartment-card">
    <img class="apartment-card__photo" :src="imgUrl" alt="" />
    <div class="apartment-card__overlay">
      <p class="apartment-card__text">{{ description }}</p>
      <StarRating class="apartment-card__rating" :rating="rating" />
      <p class="apartment-card__price">UAH {{ price }} за ночь</p>
    </div>
  </div>
</template>

<script>
import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentItem",
  components: {
    StarRating,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    imgUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-card {
  position: relative;
  max-width: 350px;
  height: 200px;

  &:hover {
    .apartment-card__overlay {
      opacity: 1;
    }
  }
}

.apartment-card__photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.apartment-card__overlay {
  position: relative;
  height: 160px;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s;
  background: rgba(#0f1d2d, 0.7);
  color: #fff;
  text-align: left;
  cursor: pointer;
}

.apartment-card__text {
  max-height: calc(1em * 1.2 * 4);
  overflow: hidden;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.apartment-card__rating {
  margin-bottom: 20px;
}

.apartment-card__price {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
</style>
