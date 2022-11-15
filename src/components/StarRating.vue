<template>
  <div class="star-rating" :style="`${ratingWidth}`">
    <span class="star" v-for="index in rating" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ratingWidth() {
      return this.rating * 50 + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  background: url("/public/images/star.svg") center no-repeat;
}
</style>
