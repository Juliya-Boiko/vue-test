<template>
  <div>
    <ApartmentItem
      :photo="apartment.photo"
      :description="apartment.description"
      :price="apartment.price"
      :rating="apartment.rating"
    />
  </div>
</template>

<script>
import ApartmentItem from "./components/apartment/ApartmentItem.vue";
export default {
  name: "App",
  components: {
    ApartmentItem,
  },
  data() {
    return {
      apartment: {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nobis quasi cupiditate hic soluta laborum corporis est velit sit animi?",
        photo: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        price: 1200,
        rating: 3,
      },
    };
  },
};
</script>

<style>
/* #app {

} */
</style>
