<template>
  <div class="debits">
    <div class="list-group">
      <a
        v-for="debt in listDebtsState"
        :key="debt._id"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-success">{{debt.name}}</h5>
          <small>{{debtsState.mounth}}</small>
        </div>
        <p class="mb-2">R$ {{debt.value}}</p>
        <small>OBS: {{debt.note}}</small>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AccountDebts",

  data() {
    return {
      listDebts: [],
      debts: {},
    };
  },
  computed: {
    ...mapGetters(["usestate", "listDebtsState", "debtsState"]),
  },
};
</script>

<style>
.debits {
  color: rgb(236, 232, 232);
  background-color: #1d1b1b;
}
</style>