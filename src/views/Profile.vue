<template>
  <div class="">
    <Navigation />
    <h3>Profilsida</h3>
    <button class="logoutBtn" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import Navigation from "@/components/Navigation.vue";
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
    }
  }
};
</script>

<style scoped>
.logoutBtn {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px;
  background-color: rgb(209, 42, 42);
}

.logoutBtn:hover {
  background-color: rgb(224, 19, 19);
}
</style>
