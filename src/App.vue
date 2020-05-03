<template>
  <div id="app">
    <v-app id="inspire">

      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <router-view />
          </v-layout>
        </v-container>
      </v-content>

    </v-app>
  </div>
</template>

<script>
import store from "./store";
import axios from "axios";

export default {
  name: "App",
  created: function() {
    // /getUserByUsername/{username}
    let tempToken = localStorage.getItem(store.state.setTokenLocalStorageKey);
    if (tempToken !== "") {
      // GOT TOKEN
      let vmObjectInstance = this;
      let headers = {
        Authorisation: tempToken,
        "Content-Type": "application/json"
      };
      this.getADUserDataCall(vmObjectInstance, headers);
    }
  },
  data: () => ({
    savedUsername: localStorage.getItem(store.state.setUsernameLocalStorageKey),
    getUserDataEndpoint:
      store.state.urlStore.baseUrlCentralAdmin + "getUserByUsername/"
  }),
  methods: {
    getADUserDataCall(vmObjectInstance, headers) {
      axios
        .get(this.getUserDataEndpoint + this.savedUsername, {
          headers: headers
        })
        .then(function(response) {
          if (response.status === 200) {
            console.log(
              localStorage.getItem(store.state.setTokenLocalStorageKey)
            );
            console.log("USER DATA >>> ", response);
          }
        })
        .catch(function(error) {
          console.error(error);
          vmObjectInstance.dialog = false;
          vmObjectInstance.dialogCallResponse = true;
        });
    }
  }
};
</script>

<style>
.leftNavText {
  font-size: 0.9em !important;
  font-weight: 900;
  color: #ffffff !important;
}

#appBox {
  width: 100% !important;
  display: block;
  margin: auto;
}

#leftNavLogout {
  border: none;
  background-color: transparent;
  box-shadow: none;
  font-weight: 900;
  font-size: 0.9em !important;
  color: #ffffff !important;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  color: #ffffff;
}

.leftNavs a {
  color: #ffffff !important;
}

.breadCrumbs {
  color: #42b983;
}

.breadCrumbsBox {
  float: right;
}

.breadCrumbsBox > a {
  color: #42b983;
}

.clearfix {
  clear: both;
}

.subMenuButton {
  float: left;
  margin-right: 20px;
  margin-top: 20px;
}

.btn {
  padding: 3%;
}
</style>
