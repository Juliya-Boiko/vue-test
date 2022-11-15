<template>
  <ApartmentFilter @submit.prevent="filter" />
  <ApartmentsList :items="filteredApartments" />
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
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCity(this.filterByPrice(this.apartments));
      //return this.filterByCity(this.apartments);
    },
  },
  methods: {
    filter(e) {
      this.filters.city = e.target.elements[0].value;
      this.filters.price = e.target.elements[1].value;
      //console.log("this.city --->", this.filters.city);
      //console.log("this.price --->", this.filters.price);
    },
    filterByCity(apartments) {
      if (!this.filters.city) {
        return apartments;
      }
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) {
        return apartments;
      }
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>
