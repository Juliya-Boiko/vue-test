<template>
  <header class="header">
    <MainContainer>
      <div class="header-content">
        <LogoIcon />
        <div class="profile">
          <p class="profile__text">Профіль</p>
          <img src="../assets/svg/user.svg" alt="" />
        </div>
      </div>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from "./shared/MainContainer.vue";
import LogoIcon from "./LogoIcon.vue";

export default {
  name: "HeaderContainer",
  components: {
    MainContainer,
    LogoIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header {
  padding: 16px 0;
  color: $secondary-color;
  background-color: $bg-color;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile {
  display: flex;
  align-items: center;
}

.profile__text {
  margin-right: 10px;
}
</style>
