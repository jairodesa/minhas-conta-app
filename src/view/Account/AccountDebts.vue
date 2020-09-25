<template>
  <div class="debits">
    <span class="d-flex p-2 bg-dark text-white flex-row-reverse bd-highlight">
      <!-- <router-link to="/registeraccoount" class="btn btn-success">Cadastrar</router-link> -->
      <a v-on:click="insertDebts" class="btn btn-success">Cadastrar</a>
    </span>
    <br />
    <div class="list-group">
      <a
        v-for="debt in listDebtsState"
        :key="debt._id"
        class="list-group-item list-group-item-action bg-dark"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-success">{{debt.name}}</h5>
          <small>{{debtsState.mounth}}</small>
        </div>
        <p class="mb-2">R$ {{debt.value}}</p>
        <small class="d-flex w-100 justify-content-between">OBS: {{debt.note}}</small>
        <div class="justify-content-between">
          <div class="form-inline">
            <div class="form-group mb-2">
              <button class="btn btn-outline-warning btn-sm">Alterar</button>
            </div>
            <div class="form-group mb-2">
              <button
                v-on:click="deleteDebt(debt._id)"
                class="btn btn-outline-danger btn-sm"
              >Excluir</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AccountDebts",
  components: {},
  computed: {
    ...mapGetters(["usestate", "listDebtsState", "debtsState"]),
  },
  methods: {
    insertDebts() {
      this.$router.push({
        name: "registerAccoount",
        params: { id: this.debtsState._id },
      });
    },
    deleteDebt(id) {
      console.log(this.usestate.id, this.debtsState._id, id);
    },
  },
};
</script>

<style>
.debits {
  color: rgb(236, 232, 232);
  background-color: #1d1b1b;
}
.bg-dark {
  color: rgb(224, 217, 217);
}
.bg-dark:hover {
  color: rgb(255, 253, 253);
}
</style>