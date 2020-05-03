<template>
  <v-row justify="center">
    <section class="dt-login--container">
        <section class="dt-login__content-wrapper" >

            <section class="dt-login__bg-section">

                <section class="dt-login__bg-content">
                    <a href="#/Signup" style="float: right;margin-right: -30px;margin-top: -40px;color: #fff"> <i class="fa fa-arrow-right"></i> </a>
                    <h1 class="dt-login__title" style="margin-left: -15%;font-weight: 900">{{appName}}</h1>
                    <p class="f-16">Login with your {{appName}} Account.</p>
                </section>


                <section class="dt-login__logo">
                    <a class="dt-brand__logo-link" href="#" style="background-color: #333; padding: 8%;border-radius: 5%;margin-left: -13%;opacity: 0.9">
                        <img class="img img-responsive dt-brand__logo-img" src="/assets/images/corporate-setup-logo.png" v-bind:alt="appName" style="width: 180px;border-radius: 10px;box-shadow: 3px 3px 3px #333333;">
                    </a>
                </section>

            </section>

            <section class="dt-login__content" >

                <section class="dt-login__content-inner">

                  <form>
                        <v-row justify="center">
                          <v-dialog v-model="dialogCallResponse" persistent max-width="290">
                            <v-card>
                              <v-alert
                                v-show="showErrorIcon"
                                dense
                                text
                                type="error"
                              >
                                Email and password combinatin incorrect <strong> Failed </strong>
                              </v-alert>
                              <sweetalert-icon icon="error" v-show="showErrorIcon" />
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text @click="dialogCallResponse = false">Close</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-row>
                        
                        <v-dialog
                          v-model="dialog"
                          hide-overlay
                          persistent
                          width="300"
                        >
                          <v-card
                            color="green"
                            dark
                          >
                            <v-card-text>
                              Sending Request Please Stand By
                              <v-progress-linear
                                indeterminate
                                color="white"
                                class="mb-0"
                              ></v-progress-linear>
                            </v-card-text>
                          </v-card>
                        </v-dialog>

                        <v-text-field
                          v-model="email"
                          :error-messages="emailErrors"
                          :counter="100"
                          label="Email"
                          required
                          @input="$v.email.$touch()"
                          @blur="$v.email.$touch()"
                        ></v-text-field>

                        <v-text-field
                          :error-messages="passwordErrors"
                          v-model="password"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showPassword ? 'text' : 'password'"
                          label="Password"
                          hint="your password"
                          :counter="50"
                          @input="$v.password.$touch()"
                          @blur="$v.password.$touch()"
                          @click:append="showPassword = !showPassword"
                        ></v-text-field>

                        <v-btn class="mr-4" @click="submit">Login</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </form>
                </section>
            </section>
        </section>
    </section>
  </v-row>
</template>

<script>
import store from "../store";
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  created: function() {
    let tempToken = localStorage.getItem(store.state.setTokenLocalStorageKey);
    if (tempToken !== "") {
      // GOT TOKEN, SO USER HAS LOGIN BEFORE NOW
      this.$router.push("ManageUsersCrud");
    } else {
      // DON'T HAVE TOKEN
      localStorage.setItem(store.state.setIsLoginLocalStorageKey, false);
      localStorage.setItem(store.state.setTokenLocalStorageKey, "");
    }
  },
  mixins: [validationMixin],
  validations: {
    email: { required, maxLength: maxLength(100), email },
    password: { required, maxLength: maxLength(50) }
  },
  data: () => ({
    appName: store.state.appName,
    showPassword: false,
    showErrorIcon: false,
    dialog: false,
    dialogCallResponse: false,
    endpoint:
      store.state.urlStore.baseUrlAuth + store.state.urlStore.adLoginUrl,
    email: "greendublin007@gmail.com",
    password: "Steeldubs0077!@#",
    objectToSend: {
      email: null,
      password: null
    }
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.maxLength &&
        errors.push("Email must be no more than 100 characters long");
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be no more than 50 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.dialog = true;
        let vmObjectInstance = this;
        this.objectToSend.email = this.email;
        this.objectToSend.password = this.password;
        let headers = this.objectToSend;
        this.loginUrlCall(vmObjectInstance, headers);
      }
    },
    clear() {
      this.$v.$reset();
      this.$router.go(); // reloads the page
    },
    loginUrlCall(vmObjectInstance, headers) {
      axios
        .post(this.endpoint, headers)
        .then(function(response) {
          if (response.status === 200) {
            vmObjectInstance.dialog = false;
            localStorage.setItem(store.state.setIsLoginLocalStorageKey, true);
            localStorage.setItem(
              store.state.setTokenLocalStorageKey,
              response.data.token
            );
            localStorage.setItem(
              store.state.setEmailLocalStorageKey,
              vmObjectInstance.email
            );
            setTimeout(() => {
              vmObjectInstance.$router.push("Dashboard");
            }, store.state.redirectTimeout);
          } else {
            vmObjectInstance.showErrorIcon = true;
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


<style scoped>
.dt-login--container {
  margin-top: -5%;
}

.dt-login__bg-section {
  background-image: url(../../public/assets/images/login-background.jpg) !important;
  background-color: #28a745 !important;
}

.dt-login__bg-section:before {
  background-image: url(../../public/assets/images/login-background.jpg) !important;
  background-color: #28a745 !important;
}
</style>

