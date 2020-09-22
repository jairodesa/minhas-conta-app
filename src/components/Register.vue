<template>
  <div class="form">
    <!-- <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p> -->
    <div class="text-center">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Cadastrar</h1>

        <div class="border-bottom"></div>
        <br />
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Nome completo</label>
          <input
            type="text"
            id="inputName"
            class="form-control"
            v-model="user.userName"
            placeholder="Nome completo"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            v-model="user.userEmail"
            placeholder="Email"
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
            placeholder="Senha"
            v-model="user.userPassword"
            required
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Confirmar Senha</label>
          <input
            type="password"
            id="inputPasswordConfirm"
            class="form-control"
            placeholder="Confirmar Senha"
            required
          />
        </div>
        <button class="btn btn-lg btn-success btn-block" type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: ["title"],
  data() {
    return {
      user: {},
      mensagemErro: "",
    };
  },
};
</script>

<style>
</style>