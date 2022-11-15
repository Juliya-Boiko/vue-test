<template>
  <h3>{{ searchText }}</h3>
  <CustomInput v-model="searchText" />
  <CustomSelect :items="['aaaaa', 'bbbbb', 'cccccc']" />
  <ApartmentsList :items="apartments" />
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./mock/apartments";
import CustomInput from "./components/shared/CustomInput.vue";
import CustomSelect from "./components/shared/CustomSelect.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      searchText: "",
      apartments,
    };
  },
};
</script>

<style>
/* #app {

} */
</style>
