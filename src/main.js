import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import firebaseConfig from "./config";

Vue.config.productionTip = false;

let app = "";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Reference to database

// Users
export const users = db.ref("users");
export const user = uid => db.ref(`users/${uid}`);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
