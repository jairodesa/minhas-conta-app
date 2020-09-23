<template>
  <div id="app">
    <Menu v-if="userStateLogin" />
    <div class="container">
      <br />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
  computed: {
    ...mapGetters(["userStateLogin"]),
  },
  mounted() {},
};
</script>

<style>
#app {
  color: rgb(236, 232, 232);
  background-color: #1d1b1b;
  /* height: 700px; */
}
</style>
