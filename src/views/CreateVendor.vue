<template>
  <div class="create-vendor container">
  <div class="vendorScoreBoard">
      <span class="vendorTitle">Vendor Score</span>
      <span class="vendorScore" title="Current Vendor Score">{{this.totalVendorScore}}</span>
  </div>
  <div style="clear:both;"></div>
    <h1>Create Vendor</h1>
    <div class="clearfix"></div>
    
    <form>
      <v-row justify="center">
        <v-dialog v-model="dialogCallResponse" persistent max-width="290">
          <v-card>
            <v-alert
              v-show="showSuccessIcon"
              dense
              text
              type="success"
            >
              Vendor Created <strong> Success </strong>
            </v-alert>
            <sweetalert-icon icon="success" v-show="showSuccessIcon" />
            <v-alert
              v-show="showErrorIcon"
              dense
              text
              type="error"
            >
              Error While Creating Vendor <strong> Failed </strong>
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
      <sweetalert-icon icon="loading" v-show="showLoadingIcon" />
      <sweetalert-icon icon="success" v-show="showSuccessIcon" />
      <v-alert
        v-show="showSuccessIcon"
        dense
        text
        type="success"
      >
        Vendor Created <strong> Success </strong>
      </v-alert>
      <sweetalert-icon icon="error" v-show="showErrorIcon" />
       <v-alert
        v-show="showErrorIcon"
        dense
        text
        type="error"
      >
        Error While Creating Vendor <strong> Failed </strong>
      </v-alert>

      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="50"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-select
        v-model="chosenAvailabilityOfInfo"
        :items="allAvailabilityOfInfoSelect"
        :error-messages="availabilityofFinancialInformationErrors"
        label="Availability of Financial Information"
        required
        @change="$v.chosenAvailabilityOfInfo.$touch()"
        @blur="$v.chosenAvailabilityOfInfo.$touch()"
      ></v-select>

      <v-file-input 
      :rules="rules"
      accept="image/*,.pdf"
      placeholder="Pick an image or pdf document"
      hint="Availability Of Financial Information Document (Image or PDF format only)"
      v-model="availabilityOfInfoDocument"
      error-message="Please upload Availability Of Financial Information Document" 
      required
      label="Availability of Financial Document" 
      show-size 
      counter 
      chips></v-file-input>

      <v-select
        v-model="chosenBusinessCycle"
        :items="allBusinessCycleSelect"
        :error-messages="allBusinessCycleErrors"
        label="Business Cycle"
        required
        @change="$v.chosenBusinessCycle.$touch()"
        @blur="$v.chosenBusinessCycle.$touch()"
      ></v-select>

      <v-select
        v-model="chosenBusinessEffectiveness"
        :items="allBusinessEffectivenessSelect"
        :error-messages="allBusinessEffectivenessErrors"
        label="Business Effectiveness"
        required
        @change="$v.chosenBusinessEffectiveness.$touch()"
        @blur="$v.chosenBusinessEffectiveness.$touch()"
      ></v-select>
      
      <v-file-input 
      :rules="rules"
      accept="image/*,.pdf"
      placeholder="Pick an image or pdf document"
      hint="Business Effectiveness Document (Image or PDF format only)"
      v-model="businessEffectivenessDocument"
      error-message="Please upload Business Effectiveness Document" 
      required
      label="Business Effectiveness Document" 
      show-size 
      counter 
      chips></v-file-input>

      <v-select
        v-model="chosenBusinessManagement"
        :items="allBusinessManagementSelect"
        :error-messages="allBusinessManagementErrors"
        label="Business Management"
        required
        @change="$v.chosenBusinessManagement.$touch()"
        @blur="$v.chosenBusinessManagement.$touch()"
      ></v-select>

      <v-file-input 
      :rules="rules"
      accept="image/*,.pdf"
      placeholder="Pick an image or pdf document"
      hint="Business Management Document (Image or PDF format only)"
      v-model="businessManagementDocument"
      error-message="Please upload Business Effectiveness Document" 
      required
      label="Business Management Document" 
      show-size 
      counter 
      chips></v-file-input>
      
      <v-select
        v-model="chosenBusinessModel"
        :items="allBusinessModelSelect"
        :error-messages="allBusinessModelErrors"
        label="Business Model"
        required
        @change="$v.chosenBusinessModel.$touch()"
        @blur="$v.chosenBusinessModel.$touch()"
      ></v-select>

      <v-select
        v-model="chosenBusinessType"
        :items="allBusinessTypeSelect"
        :error-messages="allBusinessTypeErrors"
        label="Business Type"
        required
        @change="$v.chosenBusinessType.$touch()"
        @blur="$v.chosenBusinessType.$touch()"
      ></v-select>

      <v-select
        v-model="chosenClientBase"
        :items="allClientBaseSelect"
        :error-messages="allClientBaseErrors"
        label="Client Base"
        required
        @change="$v.chosenClientBase.$touch()"
        @blur="$v.chosenClientBase.$touch()"
      ></v-select>

       <v-select
        v-model="chosenInfoSecurityRating"
        :items="allInfoSecurityRatingSelect"
        :error-messages="allInfoSecurityRatingErrors"
        label="Info Security Rating"
        required
        @change="$v.chosenInfoSecurityRating.$touch()"
        @blur="$v.chosenInfoSecurityRating.$touch()"
      ></v-select>

      <v-file-input 
      :rules="rules"
      accept="image/*,.pdf"
      placeholder="Pick an image or pdf document"
      hint="Info Security Rating Document (Image or PDF format only)"
      v-model="infoSecurityRatingDocument"
      error-message="Please upload Info Security Rating Document" 
      required
      label="Info Security Rating Document" 
      show-size 
      counter 
      chips></v-file-input>

      <v-select
        v-model="chosenNumberOfYear"
        :items="allNumberOfYearSelect"
        :error-messages="allNumberOfYearErrors"
        label="Number Of Year"
        required
        @change="$v.chosenNumberOfYear.$touch()"
        @blur="$v.chosenNumberOfYear.$touch()"
      ></v-select>

      <v-select
        v-model="chosenOperatingRegion"
        :items="allOperatingRegionSelect"
        :error-messages="allOperatingRegionErrors"
        label="Operating Region"
        required
        @change="$v.chosenOperatingRegion.$touch()"
        @blur="$v.chosenOperatingRegion.$touch()"
      ></v-select>

      <v-select
        v-model="chosenOwnership"
        :items="allOwnershipSelect"
        :error-messages="allOwnershipErrors"
        label="Ownership"
        required
        @change="$v.chosenOwnership.$touch()"
        @blur="$v.chosenOwnership.$touch()"
      ></v-select>

      <v-file-input 
      :rules="rules"
      accept="image/*,.pdf"
      placeholder="Pick an image or pdf document"
      hint="Ownership Document (Image or PDF format only)"
      v-model="ownershipDocument"
      error-message="Please upload Ownership Document" 
      required
      label="Ownership Document" 
      show-size 
      counter 
      chips></v-file-input>

      <div class="vendorScoreBoard">
          <span class="vendorTitle">Vendor Score</span>
          <span class="vendorScore" title="Current Vendor Score">{{this.totalVendorScore}}</span>
      </div>
      <div style="clear:both;"></div>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import store from "../store";
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "CreateVendor",
  created: function() {
    let vmObjectInstance = this;
    let headers = {};

    this.getAllAvailabilityOfInfoUrlCall(vmObjectInstance, headers);
    this.getAllBusinessCycleUrlCall(vmObjectInstance, headers);
    this.getBusinessEffectivenessUrlCall(vmObjectInstance, headers);
    this.getBusinessManagementUrlCall(vmObjectInstance, headers);
    this.getBusinessModelUrlCall(vmObjectInstance, headers);
    this.getBusinessTypelUrlCall(vmObjectInstance, headers);
    this.getClientBaseUrlCall(vmObjectInstance, headers);
    this.getInfoSecurityRatingUrlCall(vmObjectInstance, headers);
    this.getNumberOfYearUrlCall(vmObjectInstance, headers);
    this.getOperatingRegionUrlCall(vmObjectInstance, headers);
    this.getOwnershipUrlCall(vmObjectInstance, headers);
    this.setCreatedBy();
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(50) },
    chosenAvailabilityOfInfo: { required },
    chosenBusinessCycle: { required },
    chosenBusinessEffectiveness: { required },
    chosenBusinessManagement: { required },
    chosenBusinessModel: { required },
    chosenBusinessType: { required },
    chosenClientBase: { required },
    chosenInfoSecurityRating: { required },
    chosenNumberOfYear: { required },
    chosenOperatingRegion: { required },
    chosenOwnership: { required }
  },
  data: () => ({
    showLoadingIcon: false,
    showSuccessIcon: false,
    showErrorIcon: false,
    dialog: false,
    dialogCallResponse: false,

    endpoint:
      store.state.urlStore.baseUrl + store.state.urlStore.createVendorUrl,

    rules: [
      value =>
        !value ||
        value.size < store.state.allowedUploadLimit ||
        "Document or image size should be less than 2 MB!"
    ],

    name: "",

    getAllAvailabilityOfInfoUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getAllAvailabilityOfFinancialWithScoreUrl,
    allAvailabilityOfInfoData: [],
    allAvailabilityOfInfoSelect: [],
    chosenAvailabilityOfInfo: null,
    availabilityOfInfoScore: 0,
    availabilityOfInfoDocument: null,

    getAllBusinessCycleUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getbusinesscyclewithScoreUrl,
    allBusinessCycleData: [],
    allBusinessCycleSelect: [],
    chosenBusinessCycle: null,
    businessCycleScore: 0,

    getBusinessEffectivenessUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getBusinessEffectivenesswithScoreUrl,
    allBusinessEffectivenessData: [],
    allBusinessEffectivenessSelect: [],
    chosenBusinessEffectiveness: null,
    businessEffectivenessScore: 0,
    businessEffectivenessDocument: null,

    getBusinessManagementUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getBusinessManagementwithScoreUrl,
    allBusinessManagementData: [],
    allBusinessManagementSelect: [],
    chosenBusinessManagement: null,
    businessManagementScore: 0,
    businessManagementDocument: null,

    getBusinessModelUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getBusinessModelwithScoreUrl,
    allBusinessModelData: [],
    allBusinessModelSelect: [],
    chosenBusinessModel: null,
    businessModelScore: 0,

    getBusinessTypeUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getBusinessTypewithScoreUrl,
    allBusinessTypeData: [],
    allBusinessTypeSelect: [],
    chosenBusinessType: null,
    businessTypeScore: 0,

    getClientBaseUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getClientBaseWithScoreUrl,
    allClientBaseData: [],
    allClientBaseSelect: [],
    chosenClientBase: null,
    clientBaseScore: 0,

    getInfoSecurityRatingUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getInfoSecurityRatingWithScoreUrl,
    allInfoSecurityRatingData: [],
    allInfoSecurityRatingSelect: [],
    chosenInfoSecurityRating: null,
    infoSecurityRatingScore: 0,
    infoSecurityRatingDocument: null,

    getNumberOfYearUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getNumberOfYearWithScoreUrl,
    allNumberOfYearData: [],
    allNumberOfYearSelect: [],
    chosenNumberOfYear: null,
    numberofyearScore: 0,

    getOperatingRegionUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getOperatingRegionwithScoreUrl,
    allOperatingRegionData: [],
    allOperatingRegionSelect: [],
    chosenOperatingRegion: null,
    operatingRegionScore: 0,

    getOwnershipUrl:
      store.state.urlStore.baseUrl +
      store.state.urlStore.getOwnershipWithScoreUrl,
    allOwnershipData: [],
    allOwnershipSelect: [],
    chosenOwnership: null,
    ownershipScore: 0,
    ownershipDocument: null,

    objectToSend: {
      name: "",
      availabilityofFinancialInformationID: 0,
      availabilityofFinancialInformationScore: 0,
      availabilityofFinancialInformationPath: "",
      businessCycleID: 0,
      businessCycleScore: 0,
      businessEffectivenessID: 0,
      businessEffectivenessScore: 0,
      businessEffectivenessPath: "",
      businessManagementID: 0,
      businessManagementScore: 0,
      businessManagementPath: "",
      businessModelID: 0,
      businessModelScore: 0,
      businessTypeID: 0,
      businessTypeScore: 0,
      clientBaseID: 0,
      clientBaseScore: 0,
      infoSecurityRatingID: 0,
      infoSecurityRatingScore: 0,
      infoSecurityRatingPath: "",
      numberofyearID: 0,
      numberofyearScore: 0,
      operatingRegionID: 0,
      operatingRegionScore: 0,
      ownershipID: 0,
      ownershipScore: 0,
      ownershipPath: "",
      totalScore: 0,
      createdBy: store.state.createdBy
    }
  }),
  watch: {
    name: function(val) {
      this.objectToSend.name = val;
    },
    chosenAvailabilityOfInfo: function(val) {
      let returnAvailabilityOfInfoDataObj = this.allAvailabilityOfInfoData.filter(
        function(obj) {
          if (obj.id === val) {
            return obj;
          }
        }
      );

      if (returnAvailabilityOfInfoDataObj.length === 1) {
        this.objectToSend.availabilityofFinancialInformationID =
          returnAvailabilityOfInfoDataObj[0].id;
        this.objectToSend.availabilityofFinancialInformationScore =
          returnAvailabilityOfInfoDataObj[0].score;
        this.availabilityOfInfoScore +=
          this.availabilityOfInfoScore +
          returnAvailabilityOfInfoDataObj[0].score;
        this.objectToSend.availabilityofFinancialInformationPath = "";
      }
    },
    availabilityOfInfoDocument: function(val) {
      this.handleAvailabilityOfInfoDocumentFileUpload(val);
    },
    chosenBusinessCycle: function(val) {
      let returnBusinessCycle = this.allBusinessCycleData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnBusinessCycle.length === 1) {
        this.objectToSend.businessCycleID = returnBusinessCycle[0].id;
        this.objectToSend.businessCycleScore = returnBusinessCycle[0].score;
        this.businessCycleScore = returnBusinessCycle[0].score;
      }
    },
    chosenBusinessEffectiveness: function(val) {
      let returnBusinessEffectiveness = this.allBusinessCycleData.filter(
        function(obj) {
          if (obj.id === val) {
            return obj;
          }
        }
      );

      if (returnBusinessEffectiveness.length === 1) {
        this.objectToSend.businessEffectivenessID =
          returnBusinessEffectiveness[0].id;
        this.objectToSend.businessEffectivenessScore =
          returnBusinessEffectiveness[0].score;
        this.businessEffectivenessScore = returnBusinessEffectiveness[0].score;
        this.objectToSend.businessEffectivenessPath = "";
      }
    },
    businessEffectivenessDocument: function(val) {
      this.handleBusinessEffectivenessDocumentFileUpload(val);
    },
    chosenBusinessManagement: function(val) {
      let returnBusinessMangement = this.allBusinessManagementData.filter(
        function(obj) {
          if (obj.id === val) {
            return obj;
          }
        }
      );

      if (returnBusinessMangement.length === 1) {
        this.objectToSend.businessManagementID = returnBusinessMangement[0].id;
        this.objectToSend.businessManagementScore =
          returnBusinessMangement[0].score;
        this.businessManagementScore = returnBusinessMangement[0].score;
        this.objectToSend.businessManagementPath = "";
      }
    },
    businessManagementDocument: function(val) {
      this.handleBusinessManagementDocumentFileUpload(val);
    },
    chosenBusinessModel: function(val) {
      let returnBusinessModel = this.allBusinessModelData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnBusinessModel.length === 1) {
        this.objectToSend.businessModelID = returnBusinessModel[0].id;
        this.objectToSend.businessModelScore = returnBusinessModel[0].score;
        this.businessModelScore = returnBusinessModel[0].score;
      }
    },
    chosenBusinessType: function(val) {
      let returnBusinessType = this.allBusinessTypeData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnBusinessType.length === 1) {
        this.objectToSend.businessTypeID = returnBusinessType[0].id;
        this.objectToSend.businessTypeScore = returnBusinessType[0].score;
        this.businessTypeScore = returnBusinessType[0].score;
      }
    },
    chosenClientBase: function(val) {
      let returnClientBase = this.allClientBaseData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnClientBase.length === 1) {
        this.objectToSend.clientBaseID = returnClientBase[0].id;
        this.objectToSend.clientBaseScore = returnClientBase[0].score;
        this.clientBaseScore = returnClientBase[0].score;
      }
    },
    chosenInfoSecurityRating: function(val) {
      let returnInfoSecurityRating = this.allInfoSecurityRatingData.filter(
        function(obj) {
          if (obj.id === val) {
            return obj;
          }
        }
      );

      if (returnInfoSecurityRating.length === 1) {
        this.objectToSend.infoSecurityRatingID = returnInfoSecurityRating[0].id;
        this.objectToSend.infoSecurityRatingScore =
          returnInfoSecurityRating[0].score;
        this.infoSecurityRatingScore = returnInfoSecurityRating[0].score;
        this.objectToSend.infoSecurityRatingPath = "";
      }
    },
    infoSecurityRatingDocument: function(val) {
      this.handleInfoSecurityRatingDocumentFileUpload(val);
    },
    chosenNumberOfYear: function(val) {
      let returnNumberOfYear = this.allNumberOfYearData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnNumberOfYear.length === 1) {
        this.objectToSend.numberofyearID = returnNumberOfYear[0].id;
        this.objectToSend.numberofyearScore = returnNumberOfYear[0].score;
        this.numberofyearScore = returnNumberOfYear[0].score;
      }
    },
    chosenOperatingRegion: function(val) {
      let returnOperatingRegion = this.allOperatingRegionData.filter(function(
        obj
      ) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnOperatingRegion.length === 1) {
        this.objectToSend.operatingRegionID = returnOperatingRegion[0].id;
        this.objectToSend.operatingRegionScore = returnOperatingRegion[0].score;
        this.operatingRegionScore = returnOperatingRegion[0].score;
      }
    },
    chosenOwnership: function(val) {
      let returnOwnership = this.allOwnershipData.filter(function(obj) {
        if (obj.id === val) {
          return obj;
        }
      });

      if (returnOwnership.length === 1) {
        this.objectToSend.ownershipID = returnOwnership[0].id;
        this.objectToSend.ownershipScore = returnOwnership[0].score;
        this.ownershipScore = returnOwnership[0].score;
      }
    },
    ownershipDocument: function(val) {
      this.handleOwnershipDocumentFileUpload(val);
    }
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    availabilityofFinancialInformationErrors() {
      const errors = [];
      if (!this.$v.chosenAvailabilityOfInfo.$dirty) return errors;
      !this.$v.chosenAvailabilityOfInfo.required &&
        errors.push("Value is required");
      return errors;
    },
    allBusinessCycleErrors() {
      const errors = [];
      if (!this.$v.chosenBusinessCycle.$dirty) return errors;
      !this.$v.chosenBusinessCycle.required && errors.push("Value is required");
      return errors;
    },
    allBusinessEffectivenessErrors() {
      const errors = [];
      if (!this.$v.chosenBusinessEffectiveness.$dirty) return errors;
      !this.$v.chosenBusinessEffectiveness.required &&
        errors.push("Value is required");
      return errors;
    },
    allBusinessManagementErrors() {
      const errors = [];
      if (!this.$v.chosenBusinessManagement.$dirty) return errors;
      !this.$v.chosenBusinessManagement.required &&
        errors.push("Value is required");
      return errors;
    },
    allBusinessModelErrors() {
      const errors = [];
      if (!this.$v.chosenBusinessModel.$dirty) return errors;
      !this.$v.chosenBusinessModel.required && errors.push("Value is required");
      return errors;
    },
    allBusinessTypeErrors() {
      const errors = [];
      if (!this.$v.chosenBusinessType.$dirty) return errors;
      !this.$v.chosenBusinessType.required && errors.push("Value is required");
      return errors;
    },
    allClientBaseErrors() {
      const errors = [];
      if (!this.$v.chosenClientBase.$dirty) return errors;
      !this.$v.chosenClientBase.required && errors.push("Value is required");
      return errors;
    },
    allInfoSecurityRatingErrors() {
      const errors = [];
      if (!this.$v.chosenInfoSecurityRating.$dirty) return errors;
      !this.$v.chosenInfoSecurityRating.required &&
        errors.push("Value is required");
      return errors;
    },
    allNumberOfYearErrors() {
      const errors = [];
      if (!this.$v.chosenNumberOfYear.$dirty) return errors;
      !this.$v.chosenNumberOfYear.required && errors.push("Value is required");
      return errors;
    },
    allOperatingRegionErrors() {
      const errors = [];
      if (!this.$v.chosenOperatingRegion.$dirty) return errors;
      !this.$v.chosenOperatingRegion.required &&
        errors.push("Value is required");
      return errors;
    },
    allOwnershipErrors() {
      const errors = [];
      if (!this.$v.chosenOwnership.$dirty) return errors;
      !this.$v.chosenOwnership.required && errors.push("Value is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 50 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    totalVendorScore: {
      get: function() {
        let returnTotalScore =
          this.availabilityOfInfoScore +
          this.businessCycleScore +
          this.businessEffectivenessScore +
          this.businessManagementScore +
          this.businessModelScore +
          this.businessTypeScore +
          this.clientBaseScore +
          this.infoSecurityRatingScore +
          this.numberofyearScore +
          this.operatingRegionScore +
          this.ownershipScore;
        return returnTotalScore;
      },
      set: function(val) {
        let returnTotalScore = val;
        return returnTotalScore;
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoadingIcon = true;
        this.dialog = true;
        let vmObjectInstance = this;
        this.objectToSend.totalScore = this.totalVendorScoreFinal();
        let headers = this.objectToSend;
        this.createVendorUrlCall(vmObjectInstance, headers);
      }
    },
    clear() {
      this.$v.$reset();
      this.$router.go(); // reloads the page
    },
    totalVendorScoreFinal (){
        let returnTotalScore =
          this.availabilityOfInfoScore +
          this.businessCycleScore +
          this.businessEffectivenessScore +
          this.businessManagementScore +
          this.businessModelScore +
          this.businessTypeScore +
          this.clientBaseScore +
          this.infoSecurityRatingScore +
          this.numberofyearScore +
          this.operatingRegionScore +
          this.ownershipScore;
        return returnTotalScore;
    },
    createVendorUrlCall(vmObjectInstance, headers) {
      axios
        .post(this.endpoint, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            vmObjectInstance.showLoadingIcon = false;
            vmObjectInstance.dialog = false;
            vmObjectInstance.showSuccessIcon = true;
            vmObjectInstance.dialogCallResponse = true;

            setTimeout(() => {
              this.$router.go(); // reloads the page
            }, store.state.alertLongTimeout);
          }
        })
        .catch(function(error) {
          console.error(error);
          vmObjectInstance.showLoadingIcon = false;
          vmObjectInstance.dialog = false;
          vmObjectInstance.showErrorIcon = true;
          vmObjectInstance.dialogCallResponse = true;
        });
    },
    handleAvailabilityOfInfoDocumentFileUpload(fileToUpload) {
      let formData = new FormData();
      formData.append("file", fileToUpload);
      axios
        .post(
          store.state.urlStore.baseUrl +
            store.state.urlStore.vendorFileUploadUrl,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(data => {
          console.log(
            "UPLOAD SUCCESS (handleAvailabilityOfInfoDocumentFileUpload)"
          );
          console.log("server upload data: ", data);
          if (data.status === 200) {
            this.objectToSend.availabilityofFinancialInformationPath =
              data.data;
          }
        })
        .catch(function() {
          console.log(
            "UPLOAD FAILURE (handleAvailabilityOfInfoDocumentFileUpload)"
          );
        });
    },
    handleBusinessEffectivenessDocumentFileUpload(fileToUpload) {
      let formData = new FormData();
      formData.append("file", fileToUpload);
      axios
        .post(
          store.state.urlStore.baseUrl +
            store.state.urlStore.vendorFileUploadUrl,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(data => {
          console.log(
            "UPLOAD SUCCESS (handleBusinessEffectivenessDocumentFileUpload)"
          );
          console.log("server upload data: ", data);
          if (data.status === 200) {
            this.objectToSend.businessEffectivenessPath = data.data;
          }
        })
        .catch(function() {
          console.log(
            "UPLOAD FAILURE (handleBusinessEffectivenessDocumentFileUpload)"
          );
        });
    },
    handleBusinessManagementDocumentFileUpload(fileToUpload) {
      let formData = new FormData();
      formData.append("file", fileToUpload);
      axios
        .post(
          store.state.urlStore.baseUrl +
            store.state.urlStore.vendorFileUploadUrl,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(data => {
          console.log(
            "UPLOAD SUCCESS (handleBusinessManagementDocumentFileUpload)"
          );
          console.log("server upload data: ", data);
          if (data.status === 200) {
            this.objectToSend.businessManagementPath = data.data;
          }
        })
        .catch(function() {
          console.log(
            "UPLOAD FAILURE (handleBusinessManagementDocumentFileUpload)"
          );
        });
    },
    handleInfoSecurityRatingDocumentFileUpload(fileToUpload) {
      let formData = new FormData();
      formData.append("file", fileToUpload);
      axios
        .post(
          store.state.urlStore.baseUrl +
            store.state.urlStore.vendorFileUploadUrl,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(data => {
          console.log(
            "UPLOAD SUCCESS (handleInfoSecurityRatingDocumentFileUpload)"
          );
          console.log("server upload data: ", data);
          if (data.status === 200) {
            this.objectToSend.infoSecurityRatingPath = data.data;
          }
        })
        .catch(function() {
          console.log(
            "UPLOAD FAILURE (handleInfoSecurityRatingDocumentFileUpload)"
          );
        });
    },
    handleOwnershipDocumentFileUpload(fileToUpload) {
      let formData = new FormData();
      formData.append("file", fileToUpload);
      axios
        .post(
          store.state.urlStore.baseUrl +
            store.state.urlStore.vendorFileUploadUrl,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(data => {
          console.log("UPLOAD SUCCESS (handleOwnershipDocumentFileUpload)");
          console.log("server upload data: ", data);
          if (data.status === 200) {
            this.objectToSend.ownershipPath = data.data;
          }
        })
        .catch(function() {
          console.log("UPLOAD FAILURE (handleOwnershipDocumentFileUpload)");
        });
    },
    getAllAvailabilityOfInfoUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getAllAvailabilityOfInfoUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allAvailabilityOfInfoData.push(val);
            });

            vmObjectInstance.allAvailabilityOfInfoData.map(function(val) {
              vmObjectInstance.allAvailabilityOfInfoSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getAllBusinessCycleUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getAllBusinessCycleUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allBusinessCycleData.push(val);
            });

            vmObjectInstance.allBusinessCycleData.map(function(val) {
              vmObjectInstance.allBusinessCycleSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getBusinessEffectivenessUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getBusinessEffectivenessUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allBusinessEffectivenessData.push(val);
            });

            vmObjectInstance.allBusinessEffectivenessData.map(function(val) {
              vmObjectInstance.allBusinessEffectivenessSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getBusinessManagementUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getBusinessManagementUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allBusinessManagementData.push(val);
            });

            vmObjectInstance.allBusinessManagementData.map(function(val) {
              vmObjectInstance.allBusinessManagementSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getBusinessModelUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getBusinessModelUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allBusinessModelData.push(val);
            });

            vmObjectInstance.allBusinessModelData.map(function(val) {
              vmObjectInstance.allBusinessModelSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    getBusinessTypelUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getBusinessTypeUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allBusinessTypeData.push(val);
            });

            vmObjectInstance.allBusinessTypeData.map(function(val) {
              vmObjectInstance.allBusinessTypeSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    getClientBaseUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getClientBaseUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allClientBaseData.push(val);
            });

            vmObjectInstance.allClientBaseData.map(function(val) {
              vmObjectInstance.allClientBaseSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    getInfoSecurityRatingUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getInfoSecurityRatingUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allInfoSecurityRatingData.push(val);
            });

            vmObjectInstance.allInfoSecurityRatingData.map(function(val) {
              vmObjectInstance.allInfoSecurityRatingSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    getNumberOfYearUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getNumberOfYearUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allNumberOfYearData.push(val);
            });

            vmObjectInstance.allNumberOfYearData.map(function(val) {
              vmObjectInstance.allNumberOfYearSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    getOperatingRegionUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getOperatingRegionUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allOperatingRegionData.push(val);
            });

            vmObjectInstance.allOperatingRegionData.map(function(val) {
              vmObjectInstance.allOperatingRegionSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    getOwnershipUrlCall(vmObjectInstance, headers) {
      axios
        .get(this.getOwnershipUrl, headers)
        .then(function(response) {
          if (response.data.isSuccess) {
            response.data.value.map(function(val) {
              vmObjectInstance.allOwnershipData.push(val);
            });

            vmObjectInstance.allOwnershipData.map(function(val) {
              vmObjectInstance.allOwnershipSelect.push({
                text: val.name,
                value: val.id
              });
            });
          }
        })
        .catch(function(error) {
          console.error(error.message);
        });
    },
    setCreatedBy() {
      this.objectToSend.createdBy = store.state.createdBy;
    }
  }
};
</script>

<style scoped>
.vendorScoreBoard {
  display: block;
  height: 120px;
  width: 120px;
  float: right;
}

.vendorTitle {
  float: right;
  font-size: 1.2em;
}

.vendorScore {
  clear: both;
  margin-top: 10px;
  float: right;
  background-color: #000000;
  color: #ffffff;
  font-size: 2em;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #333333;
  padding: 5%;
  font-family: "Orbitron", sans-serif;
  opacity: 0.9;
}
</style>
