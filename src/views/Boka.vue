<template>
  <div>
    <Navigation />
    <div class="boka">
      <h3>Boka lokalen?</h3>
      <div class="pickerContainer">
        <v-date-picker
          v-model="picker"
          width="100%"
          class="mt-3"
          :first-day-of-week="1"
          locale="sv-se"
          color="blue"
        >
        </v-date-picker>
        <p>{{ picker || "no date selected" }}</p>
      </div>
      <v-layout row wrap>
        <v-flex xs11 sm5>
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Picker in menu"
                prepend-icon="access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
              color="blue"
            ></v-time-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs11 sm5>
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            lazy
            full-width
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Picker in dialog"
                prepend-icon="access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-if="modal2" v-model="time" full-width>
              <v-spacer></v-spacer>
              <v-btn flat color="red" @click="modal2 = false">Cancel</v-btn>
              <v-btn flat color="green" @click="$refs.dialog.save(time)"
                >OK</v-btn
              >
            </v-time-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
      <form class="" @submit.prevent="sendForm">
        <input type="text" placeholder="Datum" v-model="picker" />
        <input type="text" placeholder="Lägenhet" v-model="apartment" />
        <input type="text" placeholder="Tid" v-model="time" />
        <v-btn type="submit" color="blue">Boka datum</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import firebase from "firebase";
import { users } from "../main.js";
export default {
  name: "boka",
  components: { Navigation },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    picker: "",
    apartment: "",
    time: "",
    menu2: false,
    modal2: false
  }),
  methods: {
    sendForm: function() {
      console.log(
        "BG ** " +
          "har bokat lokalen den " +
          this.picker +
          " klockan " +
          this.time
      );
      const uid = firebase.auth().currentUser.uid;
      const bokingObj = {
        picker: this.picker,
        time: this.time,
        apartment: this.apartment
      };
      users
        .child(uid)
        .child("reservations")
        .push(bokingObj);
    }
  }
};
</script>

<style scoped>
.boka {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pickerContainer {
  width: 40%;
}
</style>

