import axios from "axios";
import store from "../store";

export const manageCrudMixin = {
  data() {
    return {
      showLoadingIcon: false,
      showSuccessAlert: false,
      showErrorAlert: false,
      search: "",
      dataRecords: null,
      recordsToDisplay: [],
      singleRecord: null,
      dialog: false,
      headers: [{
          text: "ID ",
          align: "start",
          sortable: true,
          value: "id"
        },
        {
          text: "Friendly Name ",
          sortable: true,
          value: "friendlyName"
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false
        }
      ],
      editedIndex: -1,
      editedItem: {
        name: "",
        score: 0
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ?
        "Edit User" :
        "Edit User";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.recordsToDisplay.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      let vmObjectInstance = this;
      this.showLoadingIcon = true;

      let dataToSend = {
        id: this.editedItem.id,
        name: this.editedItem.name,
        score: parseInt(this.editedItem.score),
        createdBy: store.state.createdBy
      };

      axios
        .post(this.endpointUpdate, dataToSend)
        .then(function (response) {
          console.log(response.data);
          vmObjectInstance.showLoadingIcon = false;
          vmObjectInstance.showSuccessAlert = true;

          setTimeout(() => {
            vmObjectInstance.showSuccessAlert = false;
          }, store.state.alertTimeout);
        })
        .catch(function (error) {
          console.error(error);
          vmObjectInstance.showLoadingIcon = false;
          vmObjectInstance.showErrorAlert = true;

          setTimeout(() => {
            vmObjectInstance.showErrorAlert = false;
          }, store.state.alertTimeout);
        });

      if (this.editedIndex > -1) {
        Object.assign(this.recordsToDisplay[this.editedIndex], this.editedItem);
      } else {
        this.recordsToDisplay.push(this.editedItem);
      }
      this.close();
    }
  }
}