<template>
  <v-row justify="center">
    <section class="dt-login--container">
        <section class="dt-login__content-wrapper" >

            <section class="dt-login__bg-section">

                <section class="dt-login__bg-content">
                    <a href="#/Login" style="float: left;margin-left: -40px;margin-top: -40px;color: #fff"> <i class="fa fa-arrow-left"></i> </a>
                    <h1 class="dt-login__title" style="margin-left: -15%;font-weight: 900">{{appName}}</h1>
                    <p class="f-16">Signup for a {{appName}} Account.</p>
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
                                type="warning"
                              >
                                Error(s) with signup : <strong> {{serverReturnedErrors}} </strong>
                              </v-alert>
                              <sweetalert-icon icon="warning" v-show="showErrorIcon" />
                            </v-card>

                            <v-card>
                              <v-alert
                                v-show="showSuccessIcon"
                                dense
                                text
                                type="success"
                              >
                                An email verificatin link has been sent to <strong> ({{email}}) </strong>
                              </v-alert>
                              <sweetalert-icon icon="success" v-show="showSuccessIcon" />
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
                          v-model="name"
                          :error-messages="nameErrors"
                          :counter="100"
                          label="Company Name"
                          required
                          @input="$v.name.$touch()"
                          @blur="$v.name.$touch()"
                        ></v-text-field>

                        <v-text-field
                          v-model="email"
                          :error-messages="emailErrors"
                          :counter="100"
                          label="Company Email"
                          required
                          @input="$v.email.$touch()"
                          @blur="$v.email.$touch()"
                        ></v-text-field>

                        <v-text-field
                          v-model="phone"
                          :error-messages="phoneErrors"
                          :counter="50"
                          label="Company Phone Line"
                          required
                          @input="$v.phone.$touch()"
                          @blur="$v.phone.$touch()"
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

                        <v-text-field
                          :error-messages="confirmPasswordErrors"
                          v-model="confirmPassword"
                          :append-icon="confirmShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="confirmShowPassword ? 'text' : 'password'"
                          label="Confirm Password"
                          hint="confirm your password"
                          :counter="50"
                          @input="$v.confirmPassword.$touch()"
                          @blur="$v.confirmPassword.$touch()"
                          @click:append="confirmShowPassword = !confirmShowPassword"
                        ></v-text-field>

                        <v-checkbox
                          v-model="termsAndConditions"
                          :error-messages="termsAndConditionsErrors"
                          label="Do you agree to our terms and conditions?"
                          required
                          @change="$v.termsAndConditions.$touch()"
                          @blur="$v.termsAndConditions.$touch()"
                        ></v-checkbox>

                        <v-btn class="mr-4" @click="submit">Signup</v-btn>
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
    name: { required, maxLength: maxLength(100) },
    email: { required, maxLength: maxLength(100), email },
    phone: { required, maxLength: maxLength(50) },
    password: { required, maxLength: maxLength(50) },
    confirmPassword: { required, maxLength: maxLength(50) },
    termsAndConditions: { required }
  },
  data: () => ({
    appName: store.state.appName,
    showPassword: false,
    confirmShowPassword: false,
    showErrorIcon: false,
    showSuccessIcon: false,
    dialog: false,
    dialogCallResponse: false,
    endpoint: store.state.urlStore.baseUrlAuth + store.state.urlStore.signupUrl,
    name: "Cliquedom",
    email: "green@cliquedom.com",
    password: "Steeldubs0077!@#",
    phone: "+2347032090809",
    confirmPassword: "Steeldubs0077!@#",
    termsAndConditions: null,
    serverReturnedErrors: null,
    objectToSend: {
      name: null,
      email: null,
      password: null,
      phone: null
    }
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Company name must be no more than 100 characters long");
      !this.$v.name.required && errors.push("Company name is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push(
          "Company phone line must be no more than 50 characters long"
        );
      !this.$v.phone.required && errors.push("Company phone line is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.maxLength &&
        errors.push("Company Email must be no more than 100 characters long");
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("Company Email is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be no more than 50 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      if (this.confirmPassword !== this.password) {
        errors.push("Password and confirm password must be a match");
      }
      !this.$v.confirmPassword.required &&
        errors.push("Confirm Password is required.");
      return errors;
    },
    termsAndConditionsErrors() {
      const errors = [];
      if (!this.$v.termsAndConditions.$dirty) return errors;
      !this.$v.termsAndConditions.required &&
        errors.push("Must accept terms and conditions");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.dialog = true;
        let vmObjectInstance = this;
        this.objectToSend.name = this.name;
        this.objectToSend.password = this.password;
        this.objectToSend.email = this.email;
        this.objectToSend.phone = this.phone;
        let headers = this.objectToSend;

        this.dialogCallResponse = true;
        this.showErrorIcon = true;
        this.signupUrlCall(vmObjectInstance, headers);
      }
    },
    clear() {
      this.$v.$reset();
      this.$router.go(); // reloads the page
    },
    signupUrlCall(vmObjectInstance, headers) {
      axios
        .post(this.endpoint, headers)
        .then(function(response) {
          if (response.data.status) {
            vmObjectInstance.dialog = false;
            vmObjectInstance.dialogCallResponse = true;
            vmObjectInstance.showSuccessIcon = true;
            vmObjectInstance.showErrorIcon = false;

            setTimeout(() => {
              this.$v.$reset();
            }, store.state.alertLongTimeout);
          } else {
            vmObjectInstance.dialog = false;
            vmObjectInstance.dialogCallResponse = true;
            vmObjectInstance.showErrorIcon = true;
            vmObjectInstance.showSuccessIcon = false;

            vmObjectInstance.serverReturnedErrors = `${
              response.data.errors.email
            }  ${response.data.errors.name}`;
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

