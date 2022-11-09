<template>
  <div>
    <h1>{{ title }}</h1>
    <PrimaryBtn @click="increment" />
  </div>
</template>

<script>
import PrimaryBtn from "./components/PrimaryBtn.vue";
export default {
  name: "App",
  components: {
    PrimaryBtn,
  },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
