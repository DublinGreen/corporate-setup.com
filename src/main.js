import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import vueAxios from "vue-axios";
import SweetAlertIcons from 'vue-sweetalert-icons';

Vue.use(SweetAlertIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vueAxios,
  axios,
  render: h => h(App)
}).$mount("#app");