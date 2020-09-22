<template>
  <div>
    <div class="row align-items-center">
      <div class="col text-success">
        <h1>Minhas Contas</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        <Auth />
      </div>
      <div class="col border-left">
        <br />
        <br />
        <br />
        <Register />
      </div>
    </div>
    <div class="row">
      <div class="col text-lg-center">
        <form>
          <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../../components/Auth.vue";
import Register from "../../components/Register";
export default {
  name: "Login",
  components: {
    Auth,
    Register,
  },
};
</script>

<style>
</style>