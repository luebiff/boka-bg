<template>
  <div id="calContainer">
    <div id="calender">
      <v-date-picker
        mode="multiple"
        color="blue"
        :attributes="attributes"
        is-inline
        v-model="dates"
      >
      </v-date-picker>
      <v-calendar
        :columns="layout.columns"
        :rows="layout.rows"
        :is-expanded="layout.isExpanded"
        :attributes="attributes"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
//import "v-calendar/lib/v-calendar.min.css";

Vue.use(VCalendar);
export default {
  components: {},
  data() {
    return {
      dates: [new Date(2019, 5, 9), new Date(2019, 5, 25)],
      attributes: [
        {
          key: "today",
          //highlight: true,
          //dot: true, // Boolean, String, Object
          bar: "purple", // Boolean, String, Object
          content: "blue", // color on date number
          dates: new Date(), // todays date
          popover: {
            label: "You just hovered over today's date!"
          }
        }
      ]
    };
  },
  computed: {
    layout() {
      return this.$screens({
        // Default layout for mobile
        default: {
          columns: 1,
          rows: 1,
          isExpanded: true
        },
        // Override for large screens
        md: {
          columns: 2,
          rows: 2,
          isExpanded: false
        }
      });
    }
  }
};
</script>
<style scoped>
#calContainer {
  width: 80%;
  margin: 0 auto;
}
#calender {
}
</style>
