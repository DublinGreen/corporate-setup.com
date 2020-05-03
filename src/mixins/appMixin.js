import store from "../store";

export const appMixin = {
  methods: {
    logout() {
      localStorage.setItem("isLogin", false);
      localStorage.setItem("token", "");
      store.commit(store.state.setTokenLocalStorageKey, "");
      store.commit(store.state.setIsLoginLocalStorageKey, false);
      this.$router.push("Login");
    }
  }
}