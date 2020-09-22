<template>
  <div>
    <br />
    <div class="row">
      <Card
        v-for="account in accounts"
        :key="account._id"
        :account="account"
        :accountYear="accountYear"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../../components/Card.vue";
export default {
  name: "Accounts",
  components: {
    Card,
  },
  data() {
    return {
      accounts: [],
      accountYear: "",
    };
  },
  computed: {
    ...mapGetters(["usestate"]),
  },
  mounted() {
    this.$http
      .get(`api/account/${this.usestate.id}`)
      .then(
        (response) => (
          (this.accountYear = response.data.accountYear),
          (this.accounts = response.data.debts)
        )
      ) //))
      .catch((erro) => console.log(erro));
  },
};
</script>

<style>
</style>