<template>
  <nav class="navigation">
    <ul class="navigationList">
      <li class="navigationItem">
        <router-link to="home">
          Home
        </router-link>
      </li>
      <li class="navigationItem">
        <router-link to="boka">
          Boka
        </router-link>
      </li>
      <li class="navigationItem">
        <router-link to="info">
          Info
        </router-link>
      </li>
    </ul>
    <ul class="navigationList">
      <li class="navigationItem">
        <router-link to="profile">
          <span v-if="displayName">{{ displayName }}</span>
          <span v-else> Profil </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { user } from "@/main.js";
import firebase from "firebase";
export default {
  name: "Navigation",
  data: () => {
    return {};
  },
  computed: {
    displayName() {
      let result;
      const uid = firebase.auth().currentUser.uid;
      user(uid).on("value", snapshot => {
        const userObj = snapshot.val();
        result = userObj.displayName;
      });
      const nameCapitalized = result.charAt(0).toUpperCase() + result.slice(1);
      return nameCapitalized;
    }
  },
  beforeMount() {
    //this.viewName();
  },
  methods: {}
};
</script>

<style scoped>
.navigation {
  background-color: slategray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navigationList {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  text-decoration: none;
}

.navigationItem {
  padding: 10px;

  margin: 0 10px;
}

a {
  color: rgb(33, 96, 138);
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: rgb(182, 5, 5);
}
a:visited {
  color: rgb(33, 96, 138);
}
</style>

