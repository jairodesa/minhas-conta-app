<template>
  <div class="login">
    <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
    <div class="text-center">
      <form class="form-signin" @submit.prevent="enterLogin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <div class="border-bottom"></div>
        <br />
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            v-model="user.userEmail"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Senha</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            v-model="user.userPassword"
            required
          />
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Logar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",

  data() {
    return {
      user: {},
      mensagemErro: "",
    };
  },
  methods: {
    async enterLogin() {
      try {
        const auth = await this.$store.dispatch("enterLogin", this.user);
        if (auth) {
          this.$router.push({ name: "accounts" });
        }
      } catch (error) {
        // console.log(error);
        if (error.request.status == 401) {
          this.mensagemErro = "Login ou senha inválido(s)!!!";
          return;
        }
      }
    },
  },
};
</script>

<style>
</style>