<template>
  <div id="app">
    <Menu v-if="userStateLogin" />
    <div class="container">
      <br />
      <Breadcrumb v-if="userStateLogin" :title="'Contas'" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import { mapGetters } from "vuex";
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: {
    Breadcrumb,
    Menu,
  },
  computed: {
    ...mapGetters(["userStateLogin"]),
  },
  methods: {},
};
</script>

<style>
#app {
  color: rgb(236, 232, 232);
  background-color: #1d1b1b;
  /* height: 700px; */
}
</style>
