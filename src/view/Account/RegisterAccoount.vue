<template>
  <div class="row">
    <div class="col p-5 bg-dark">
      <form class="form-signin" @submit.prevent="insertDebts">
        <h3 class="h3 mb-3 font-weight-normal">Adicionar conta</h3>
        <div class="border-bottom"></div>
        <br />
        <div class="form-group">
          <label for="inputDebt" class="sr-only">nome da conta</label>
          <input
            type="text"
            id="inputDebt"
            class="form-control"
            placeholder="Nome da conta"
            required
            v-model="debts.name"
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputValue" class="sr-only">Valor da conta</label>
          <input
            type="number"
            id="inputValue"
            class="form-control"
            placeholder="Valor da conta"
            min="0"
            v-model="debts.value"
            required
          />
        </div>
        <div class="form-group">
          <label for="inputDueDate" class="sr-only">Dia do pagamento</label>
          <input
            type="date"
            id="inputDueDate"
            class="form-control"
            placeholder="Valor da conta"
            min="0"
            v-model="debts.dueDate"
            required
          />
        </div>
        <div class="form-group">
          <label for="inputNote" class="sr-only">Observações</label>
          <input
            type="text"
            id="inputNote"
            class="form-control"
            v-model="debts.note"
            placeholder="Observações"
            required
          />
        </div>

        <button class="btn btn-lg btn-success btn-block">Salvar</button>
        <a @click.prevent="onCancel" class="btn btn-lg btn-info btn-block"
          >Cancelar</a
        >
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RegisterAccount",
  data() {
    return {
      debts: {},
    };
  },
  computed: {
    ...mapGetters(["usestate"]),
  },
  methods: {
    async insertDebts() {
      const debts = { id: this.usestate.id, iditem: this.$route.params.id };
      this.debts.accountId = debts.id;
      this.debtsaccountId = debts.iditem;
      console.log(this.debts);
      try {
        const response = await this.$http.post(`/api/debts`, this.debts);
        if (response) {
          const debts = { id: debts.id, iditem: debts.iditem };
          const debits = await this.$store.dispatch("listDebits", debts);
          if (debits) {
            this.$router.push({ name: "accountDebts" });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async onCancel() {
      // this.debts = {};
      const debts = { id: this.usestate.id, iditem: this.$route.params.id };
      const debits = await this.$store.dispatch("listDebits", debts);
      if (debits) {
        this.$router.push({ name: "accountDebts" });
      }
    },
  },
};
</script>

<style>
.form-debits {
  color: rgb(236, 232, 232);
  background-color: #1d1b1b;
}
</style>