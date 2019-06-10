<template>
  <div class="home">
    <Navigation />
    <Welcome />
    <Calender />
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from "@/components/Welcome.vue";
import Calender from "@/components/Calender.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Welcome,
    Calender,
    Navigation
  },
  methods: {}
};
</script>