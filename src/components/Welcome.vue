<template>
  <div>
    <h1>Välkommen {{ displayName }} till Britas Gränds boknings sida</h1>
  </div>
</template>

<script>
import { user } from "@/main.js";
import firebase from "firebase";

export default {
  name: "Welcome",
  props: {},
  computed: {
    displayName() {
      let result;
      const uid = firebase.auth().currentUser.uid;
      user(uid).once("value", snapshot => {
        const userObj = snapshot.val();
        result = userObj.displayName;
      });
      const nameCapitalized = result.charAt(0).toUpperCase() + result.slice(1);
      return nameCapitalized;
    }
  },
  methods: {}
};
</script>
<style scoped>
h1 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>