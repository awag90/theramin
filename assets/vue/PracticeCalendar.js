import calendarcell from "/vue/CalendarCell.js";

export default {
  props: ["practiceId"],
  components: {
    calendarcell,
  },
  emits: ['create-appointment'],
  data: function () {
    return {
      therapists: [],
      times: [],
      day: new Date(),
    };
  },
  methods: {
    increment: function () {
      if (this.day.getDay() != 5) {
        this.day = new Date(this.day.getTime() + 24 * 60 * 60 * 1000);
      } else {
        this.day = new Date(this.day.getTime() + 3 * 24 * 60 * 60 * 1000);
      }
      this.setTimes();
    },

    decrement: function () {
      if (this.day.getTime() > new Date().getTime()) {
        if (this.day.getDay() != 1) {
          this.day = new Date(this.day.getTime() - 24 * 60 * 60 * 1000);
        } else {
          this.day = new Date(this.day.getTime() - 3 * 24 * 60 * 60 * 1000);
        }
      }
      this.setTimes();
    },

    setTimes: function () {
      this.day.setHours(0, 0, 0);
      this.times = [];
      for (
        let i = this.day.getTime() + 3600000 * 8;
        i < this.day.getTime() + 3600000 * 20;
        i += 1800000
      ) {
        this.times.push(new Date(i));
      }
    },

    getGermanWeekdayForDatetime: function (day) {
      let dayNum = day.getDay();
      switch (dayNum) {
        case 1:
          return "Montag";
        case 2:
          return "Dienstag";
        case 3:
          return "Mittwoch";
        case 4:
          return "Donnerstag";
        case 5:
          return "Freitag";
      }
    },

    reemit: function (therapist, time) {
      console.log(therapist);
      console.log(time);
      this.$emit("createAppointment", therapist, time);
    },
  },
  async created() {
    let url = new URL(origin + "/practice/" + this.practiceId + "/therapists");
    await fetch(url)
      .then((res) => res.json())
      .then((data) => (this.therapists = data));

    if (this.day.getDay() == 6) {
      this.day = new Date(this.day.getTime() + 2 * 24 * 60 * 60 * 1000);
    } else if (this.day.getDay() == 0) {
      this.day = new Date(this.day.getTime() - 24 * 60 * 60 * 1000);
    }
    this.setTimes();
  },

  template: `
    <div class="row justify-content-center my-2">
        <button class="btn btn-primary col-md-2 col-3" @click="decrement">Zurück</button>
        <p class="col-md-2 col-4 text-center">{{getGermanWeekdayForDatetime(day)}}, {{day.toLocaleDateString()}}</p>
        <button class="btn btn-primary col-md-2 col-3" @click="increment">Weiter</button>
    </div>
    <div class="calendar row  my-2 mx-1">
        <table class="table">
            <thead class="cal-head">
                <tr>
                    <th></th>
                    <th class="text-center" v-for="therapist in therapists" v-bind:value="therapist">{{therapist.firstname}}<br> {{therapist.name}}</th>
                </tr>
                <tr>
                    <td></td>
                    <td class="text-center" v-for="therapist in therapists" v-bind:value="therapist">{{therapist.specialisation.name}}</td>
                </tr>
            </thead>
            <tbody class="cal-body">
                <tr  v-for="time in times" :key="time.getTime()">
                    <th class="text-center">{{time.toTimeString().slice(0,5)}}</th>               
                    <td class="text-center" v-for="therapist in therapists" :value="therapist">
                    <calendarcell :time="time" :therapist="therapist" @createAppointment="reemit"></calendarcell>
                    </td>
                </tr>
            </tbody>
    </table>
  </div>
  `,
};
