<template>
  <section style="width: 100%">
    <NavMain />
      <v-content style="clear: both;padding: 2%;margin:0;width: 100%">
            <section class="breadCrumbsBox">
              <v-breadcrumbs :items="breadCrumbsData" large></v-breadcrumbs>
            </section>
            <section class="clearfix"></section>
            <br /><br />

            <v-card-title>
              Manage Users
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>

            <v-alert type="success" v-show="showSuccessAlert">
              Record updated!
            </v-alert>

            <sweetalert-icon icon="loading" v-show="showLoadingIcon" />

            <v-alert type="error" v-show="showErrorAlert">
              Unable to update record.
            </v-alert>

            <v-data-table
              :headers="headers"
              :items="recordsToDisplay"
              sort-by="name"
              class="elevation-1"
              :search="search"
              :loading="loadingPage"
              loading-text="Loading... Please wait"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-toolbar-title>CRUD</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.id"
                                label="ID"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.friendlyName"
                                label="Friendly Name"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
              </template>
              <template v-slot:no-data> </template>
            </v-data-table>
      </v-content>
    <Footer />
  </section>
</template>

<script>
import axios from "axios";
import { manageCrudMixin } from "../mixins/manageCrudMixin.js";
import store from "../store";
import NavMain from "../components/Navs/NavMain.vue";
import Footer from "../components/Footers/Footer.vue";

export default {
  name: "ManageUsersCrud",
  mixins: [manageCrudMixin],
  components: {
    NavMain,
    Footer
  },
  created: function() {
    let tempToken = localStorage.getItem(store.state.setTokenLocalStorageKey);
    if (tempToken === "") {
      //GOT TOKEN
      this.$router.push("/#");
    }

    let vmObjectInstance = this;
    // : store.state.token,

    let headers = {
      Authorization: localStorage.getItem(store.state.setTokenLocalStorageKey)
    };
    // let config = {
    //   headers: { Authorization: `Bearer ${token}` }
    // };
    axios
      .get(this.endpoint, {
        headers: headers
      })
      .then(function(response) {
        console.log("response >>> ", response);
        if (response.data.responseMessage === "SUCCESSFUL") {
          vmObjectInstance.dataRecords = response.data.data;
          vmObjectInstance.recordsToDisplay = vmObjectInstance.dataRecords;
        }

        console.log(response.data.responseMessage);
        if (
          response.data.responseMessage === "FAILED" &&
          response.data.data.status == 400
        ) {
          alert("BACK TO LOGIN");
          this.$router.push("/#");
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  data: function() {
    return {
      loadingPage: true,
      isLogin: store.state.isLogin,
      endpoint: store.state.urlStore.baseUrl + store.state.urlStore.getUsersUrl,
      endpointGetByID:
        store.state.urlStore.baseUrl + store.state.urlStore.getUserByIdUrl,
      endpointUpdate: store.state.urlStore.baseUrl,
      breadCrumbsData: [
        {
          text: "Create Users",
          disabled: false,
          href: "#/"
        },
        {
          text: "Manage Users",
          disabled: true,
          href: "#/ManageUsersCrud"
        }
      ]
    };
  }
};
</script>
