<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <form class="form" @submit.prevent="signUp">
      <input
        class="sigup-input"
        type="text"
        v-model="displayName"
        placeholder="Display Name"
      /><br />
      <input
        class="sigup-input"
        type="text"
        v-model="email"
        placeholder="Email"
      /><br />
      <input
        class="sigup-input"
        type="password"
        v-model="password"
        placeholder="Password"
      /><br />
      <button type="submit">Sign Up</button>
    </form>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

 <script>
import firebase from "firebase";
import { user } from "../main.js";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      displayName: "",
      uid: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          authUser => {
            user(authUser.user.uid).set({
              email: this.email,
              displayName: this.displayName
            });
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

 <style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  padding: 5px;
  width: 10%;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 3px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
.sigup-input {
  border: 1px solid lightgray;
  border-radius: 5px;
}
a:visited {
  color: black;
}
</style>