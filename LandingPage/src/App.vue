<template>
  <div id="app">
    <div><header-comp></header-comp></div>
    <div>{{ isAuth }}</div>
    <router-view />
    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

import FooterView from "./components/FooterView.vue";

// import SidebarComp from "./components/SidebarComp.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    HeaderComp,
    FooterView,
    // Side,
  },

  computed: {
    ...mapGetters(["isAuth"]),
  },
  mounted() {
    this.$store.dispatch("test");
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
