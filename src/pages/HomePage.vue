<template>
  <div class="content">
    <ApartmentFilter @submit.prevent="filter" />
    <p v-if="!filteredApartments.length">Нічого не знайдено</p>
    <ApartmentsList v-else :items="filteredApartments" />
  </div>
</template>

<script>
import apartments from "@/mock/apartments";
import ApartmentFilter from "@/components/apartment/ApartmentFilter.vue";
import ApartmentsList from "@/components/apartment/ApartmentsList.vue";

export default {
  name: "HomePage",
  components: {
    ApartmentFilter,
    ApartmentsList,
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
.content {
  flex-grow: 1;
  padding-bottom: 100px;
}
</style>
