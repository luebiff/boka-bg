<template>
  <div class="calenderContainer">
    <v-calendar :dark="true" :now="today" :value="today"></v-calendar>
    <v-layout wrap>
      <!-- <v-flex xs12 class="mb-3">
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="start"
            :type="month"
            color="primary"
            :now="today"
            :value="today"
            :dark="true"
          ></v-calendar>
        </v-sheet>
      </v-flex> -->

      <!-- <v-flex sm4 xs12 class="text-sm-left text-xs-center">
        <v-btn @click="$refs.calendar.prev()">
          <v-icon dark left>
            keyboard_arrow_left
          </v-icon>
          Prev
        </v-btn>
      </v-flex>
      <v-flex sm4 xs12 class="text-xs-center">
        <v-select v-model="type" :items="typeOptions" label="Type"></v-select>
      </v-flex>
      <v-flex sm4 xs12 class="text-sm-right text-xs-center">
        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon right dark>
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </v-flex> -->
    </v-layout>
  </div>
</template>

<script>
import "vuetify/dist/vuetify.min.css";
//@import "~vuetify/src/stylus/main";
export default {
  name: "Calender",
  data: () => ({
    today: new Date(),
    events: [
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-05-30",
        open: false
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-06-31",
        open: false
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-06-01",
        open: false
      },
      {
        title: "Meeting",
        details: "Spending time on how we do not have enough time",
        date: "2019-06-07",
        open: false
      },
      {
        title: "30th Birthday",
        details: "Celebrate responsibly",
        date: "2019-06-03",
        open: false
      },
      {
        title: "New Year",
        details: "Eat chocolate until you pass out",
        date: "2019-06-01",
        open: false
      },
      {
        title: "Conference",
        details: "Mute myself the whole time and wonder why I am on this call",
        date: "2019-06-21",
        open: false
      },
      {
        title: "Hackathon",
        details: "Code like there is no tommorrow",
        date: "2019-06-01",
        open: false
      }
    ]
  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    },
    next() {}
  }
};
</script>

<style  scoped>
.calenderContainer {
  width: 80%;
  margin: 20px auto;
  border: 1px solid black;
}

.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>