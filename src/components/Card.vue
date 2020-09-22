<template>
  <div class="col">
    <div class="card text-white bg-dark mb-4" style="max-width: 18rem;">
      <div class="card-header">{{account.mounth}} - {{accountYear}}</div>
      <div class="card-body">
        <h5 class="card-title">Valor : {{account.value}}</h5>
        <p class="card-text text-lg-right">
          <spam v-on:click="findById(account._id)" class="btn btn-success">Visualizar</spam>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  props: ["account", "accountYear"],
  computed: {
    ...mapGetters(["usestate"]),
  },
  methods: {
    async findById(iditem) {
      console.log(iditem);
      const debts = { id: this.usestate.id, iditem };
      try {
        const debits = await this.$store.dispatch("listDebits", debts);
        if (debits) {
          this.$router.push({ name: "accountDebts" });
        }
      } catch (error) {
        console.log(error);
        if (error.request.status == 401) {
          return;
        }
      }
    },
  },
};
</script>

<style>
</style>