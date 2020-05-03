<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">Count : {{ getCount }}</div>
    <div>firstname : {{ firstname }}</div>
    <div>lastname : {{ lastname }}</div>
    <div>count : {{ count }}</div>
    <div>LocalStateCount : {{ countPlusLocalState }}</div>
  </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";

export default {
  name: "Todos",
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,
    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    getCount() {
      return store.state.count;
    }
  }),
  data: () => ({
    firstname: "Ria",
    lastname: "Singh",
    localCount: 100000
  })
};
</script>

<style scoped></style>
