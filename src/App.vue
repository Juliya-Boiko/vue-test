<template>
  <div id="app">
    <HeaderContainer />
    <div class="content">
      <ApartmentFilter @submit.prevent="filter" />
      <p v-if="!filteredApartments.length">Нічого не знайдено</p>
      <ApartmentsList v-else :items="filteredApartments" />
    </div>
    <FooterContainer />
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./mock/apartments";
import ApartmentFilter from "./components/apartment/ApartmentFilter.vue";
import FooterContainer from "./components/FooterContainer.vue";
import HeaderContainer from "./components/HeaderContainer.vue";

export default {
  name: "App",
  components: {
    HeaderContainer,
    ApartmentsList,
    ApartmentFilter,
    FooterContainer,
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
    },
  },
  methods: {
    filter(e) {
      this.filters.city = e.target.elements[0].value;
      this.filters.price = e.target.elements[1].value;
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

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.content {
  flex-grow: 1;
  padding-bottom: 100px;
}
</style>
