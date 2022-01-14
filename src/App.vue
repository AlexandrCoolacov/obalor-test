<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
  async mounted() {
    this.$store.dispatch("fetchForms");
  },
};
</script>

<style lang="scss">
#app {
  background-color: #fafbfd;
}
</style>
