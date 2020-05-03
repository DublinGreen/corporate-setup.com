<template>
  <v-footer color="green" app>
    <span class="white--text">{{ getCopyright }}</span>
  </v-footer>
</template>

<script>
import store from "../../store";
import { mapState } from "vuex";

export default {
  name: "Footer",
  created: function() {},
  data: () => ({
    isLogin: localStorage.getItem(store.state.setIsLoginLocalStorageKey)
  }),
  watch: {},
  computed: mapState({
    getCopyright() {
      return ` Copyright © ${store.state.commonStore.currentYear.getFullYear()} ${
        store.state.commonStore.appName
      }, All rights reserved`;
    }
  })
};
</script>

<style scoped></style>
