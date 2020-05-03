<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <NavTop />

      <v-content>
        <HelloWorld />

        <div>
          <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
            {{ todo.id }}
          </div>
        </div>

        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex text-xs-center>
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    large
                    href="https://codepen.io/johnjleider/pen/rJdVMq"
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon large>mdi-codepen</v-icon>
                  </v-btn>
                </template>
                <span>Codepen</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import HelloWorld from "./components/HelloWorld.vue";
import NavTop from "./components/Navs/NavTop.vue";
import Footer from "./components/Footers/Footer.vue";

export default {
  name: "App",
  computed: mapGetters(["todos"]),
  components: {
    HelloWorld,
    NavTop,
    Footer
  },
  data: () => ({
    drawer: null
  })
};
</script>
