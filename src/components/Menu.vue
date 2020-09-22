<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-success" href="#">Minhas Contas</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link">Bem vindo {{usestate.name}}</a>
        </li>
        <li class="nav-item">
          <router-link to="/accountdebts" class="nav-link">Contas</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="enterLogout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { logoutMixin } from "../mixins";
export default {
  name: "Menu",
  computed: {
    ...mapGetters(["usestate"]),
  },

  mixins: [logoutMixin],
};
</script>

<style>
</style>