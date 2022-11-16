<template>
  <MainContainer>
    <form class="filter-form" @submit.prevent="handleSubmit">
      <h3>Apartment Filter</h3>
      <CustomSelect :items="cities" v-model="city" />
      <CustomInput v-model="price" />
      <PrimaryBtn type="submit" title="Підбір житла" />
    </form>
  </MainContainer>
</template>

<script>
import MainContainer from "../shared/MainContainer.vue";
import PrimaryBtn from "../shared/PrimaryBtn.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
export default {
  name: "ApartmentFilter",
  components: {
    MainContainer,
    PrimaryBtn,
    CustomSelect,
    CustomInput,
  },
  data() {
    return {
      price: 0,
      city: "",
    };
  },
  methods: {
    handleSubmit() {
    },
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Dnipro",
        "Poltava",
        "Kharkiv",
        "Mariupol",
        "Odesa",
        "Kyiv",
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 39px;
  padding-top: 60px;
}
</style>
