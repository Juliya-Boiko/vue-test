<template>
  <div id="app">
    <HeaderContainer />
    <router-view></router-view>
    <FooterContainer />
  </div>
</template>

<script>
import FooterContainer from "./components/FooterContainer.vue";
import HeaderContainer from "./components/HeaderContainer.vue";

export default {
  name: "App",
  components: {
    HeaderContainer,
    FooterContainer,
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
</style>
