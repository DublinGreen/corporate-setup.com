<template>
  <section style="width: 100%">
    <NavMain />
      <v-content style="clear: both;padding: 2%;margin:0;width: 100%">

            <v-img
              v-bind:alt="getAppName"
              v-bind:title="getAppName"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="80%"
              style="margin-left: 50px;"
              src="../assets/dashboard.svg"
              width="200"
            />
            
      </v-content>
    <Footer />
  </section>
</template>

<script>
import store from "../store";
import NavMain from "../components/Navs/NavMain.vue";
import Footer from "../components/Footers/Footer.vue";

export default {
  name: "Dashboard",
  components: {
    NavMain,
    Footer
  },
  data: function() {
    return {};
  },
  computed: {
    getAppName() {
      return store.state.commonStore.appName;
    }
  }
};
</script>
