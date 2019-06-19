<template>
  <div class="">
    <Navigation />
    <h3>Profilsida</h3>
    <button class="logoutBtn" @click="logout">Logout</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
import firebase from "firebase";
import Navigation from "@/components/Navigation.vue";
import { user } from "../main.js";

export default {
  name: "Profile",
  components: {
    Navigation
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
    test: function() {
      /* let result;
      const uid = firebase.auth().currentUser.uid;
      user(uid).on("value", snapshot => {
        const userObj = snapshot.val();
        result = userObj.displayName;
        console.log(result);
      });
      return result; */
    }
  },
  computed: {}
};
</script>

<style scoped>
.logoutBtn {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px;
  background-color: rgb(209, 42, 42);
  margin-top: 20px;
}

.logoutBtn:hover {
  background-color: rgb(224, 19, 19);
}
</style>
