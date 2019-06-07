<template>
  <div class="home">
    <Welcome />
    <button @click="logout">Logout</button>
    <Calender />
  </div>
</template>

<script>
import firebase from "firebase";
// @ is an alias to /src

import Welcome from "@/components/Welcome.vue";
import Calender from "@/components/Calender.vue";
export default {
  name: "home",
  components: {
    Welcome,
    Calender
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>