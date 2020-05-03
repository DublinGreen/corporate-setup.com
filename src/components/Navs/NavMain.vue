<template>
  <nav>
    <v-navigation-drawer v-bind:value="leftDrawer" app>
      <v-img
        v-bind:alt="getAppName"
        v-bind:title="getAppName"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="200"
        style="margin-left: 25px;"
        src="../../assets/corporate-setup-logo.png"
        width="200"
      />

      <v-list dense active-class="border">
        <v-list-item class="leftNavs">
          <v-list-item-action>
            <i class="fa fa-home fa-4x iconlight"></i>
          </v-list-item-action>
          <v-list-item-content>
            <router-link class="leftNavText" to="/Dashboard">Home</router-link>
          </v-list-item-content>
        </v-list-item>
       

        <v-list-item class="leftNavs">
          <v-list-item-action>
            <i class="fa fa-users fa-4x iconlight"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="leftNavText">
              <router-link to="/ManageUsersCrud">Manage <br> Users</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="leftNavs">
          <v-list-item-action>
            <i class="fa fa-power-off fa-4x iconlight"></i>
          </v-list-item-action>

          <v-list-item-content>
            <p id="leftNavLogout" @click="logout">Logout</p>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="toogleLeftDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ getAppName }}</v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
import store from "../../store";
import { mapState } from "vuex";

export default {
  name: "NavTop",
  data: () => ({
    isLogin: localStorage.getItem(store.state.setIsLoginLocalStorageKey)
    // isLogin: true
  }),
  created: function() {},
  computed: mapState({
    leftDrawer: state => state.leftNavDrawerStore.leftDrawer,
    getLeftDrawer() {
      return store.state.leftNavDrawerStore.leftDrawer;
    },
    getAppName() {
      return store.state.commonStore.appName;
    }
  }),
  methods: {
    toogleLeftDrawer: function(event) {
      console.log("ToogleLeftDrawer ", event);
      store.commit("toogleLeftDrawer");
    },
    logout: function() {
      localStorage.setItem(store.state.setIsLoginLocalStorageKey, false);
      localStorage.setItem(store.state.setTokenLocalStorageKey, "");
      localStorage.setItem(store.state.setEmailLocalStorageKey, "");

      this.$router.push("Login");
      // this.$router.go(this.$router.currentRoute);

      // this.$router.push("/#");
    }
  }
};
</script>

<style scoped>
nav {
  /* border: 5px solid #ff0000; */
  box-shadow: 3px 0px 3px #333333;
}

.leftNavs {
  background-color: #4caf50;
  color: #ffffff;
  margin-bottom: 10px;
}

.leftNavs:hover {
  box-shadow: 5px 5px 5px #333333;
  border: 1px dotted #ffffff;
}

.iconlight {
  color: #ffffff;
}

.iconlight:hover {
  color: #ffff00;
}
</style>
