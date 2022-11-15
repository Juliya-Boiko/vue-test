<template>
  <ApartmentFilter @submit.prevent="logger" />
  <ApartmentsList :items="apartments" />
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./mock/apartments";
import ApartmentFilter from "./components/apartment/ApartmentFilter.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentFilter,
  },
  data() {
    return {
      // searchText: "",
      apartments,
    };
  },
  methods: {
    logger(e) {
      // e.preventDefault();
      console.log("APP LOGGER!!!! ----> ", e.target.elements[1].value);
      console.log("APP LOGGER!!!! ----> ", e.target.elements[0].value);
    },
  },
};
</script>
