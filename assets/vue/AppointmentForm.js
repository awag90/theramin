export default {
  props: ["therapistId", "time"],
  
  data: function () {
    return {
      therapist: '',
      date: new Date(),
      dateStr: '',
      startTime: new Date(),
      startTimeStr: '',
      endTime: new Date(),
      endTimeStr: '',
      therapistName: '',
      indication: '',
      userId: 0
    };
  },

  async created() {
    const timeDifference = 2 * 60 * 60 * 1000
    const appoinmentLength = 30 * 60 * 1000
    this.date = new Date(Number(this.time))
    this.date = new Date(this.date.setHours(0, 0, 0))
    this.date = new Date(this.date.getTime() + timeDifference) 
    this.startTime = new Date(Number(this.time) + timeDifference)
    this.startTime = new Date(this.startTime - this.date)
    this.endTime = new Date(Number(this.time) + timeDifference + appoinmentLength)
    this.endTime = new Date(this.endTime - this.date)
    this.dateStr = this.date.toISOString().substring(0, 10)
    this.startTimeStr = this.startTime.toISOString().substring(11, 16)
    this.endTimeStr = this.endTime.toISOString().substring(11, 16)

    let url = new URL(origin + "/therapist/" + this.therapistId);
    await fetch(url)
      .then((res) => res.json())
      .then((data) => (this.therapist = data));

    this.therapistName = this.therapist.firstname + " " + this.therapist.name;
  },

  template: `
        <form action="/appointment-as-pat" method="post">
            <input type="hidden" name="therapist" :value="therapistId">
            <input type="hidden" name="date" :value="dateStr">
            <input type="hidden" name="from" :value="startTimeStr">
            <input type="hidden" name="till" :value="endTimeStr">
            <div class="form-group row px-0 mx-2">
                <label class="form-label">Therapeut</label>
                <input type="text" class="form-control" maxlength="50" minlength ="0" v-model="therapistName" disabled />
            </div>
            <div class="row mx-2">
                <div class="form-group col-md-3 px-0">
                    <label class="form-label">Datum</label>
                    <input type="date" class="form-control"   v-model="dateStr" disabled />
                </div>
                <div class="form-group col-md-3 pl-md-4 px-0">
                    <label class="form-label">Von</label>
                    <input type="time" class="form-control"   v-model="startTimeStr" disabled />
                </div>
                <div class="form-group col-md-3 pl-md-4 px-0">
                    <label class="form-label">Bis</label>
                    <input type="time" class="form-control"  v-model="endTimeStr" disabled />
                </div>
            </div>
            <div class="form-group row px-0 mx-2">
                <label class="form-label">Grund für den Besuch</label>
                <input type="text" class="form-control" maxlength="100" minlength ="0" name="indication" v-model="indication" required/>
            </div>
            <div class="row justify-content-end mx-2">
                <button type="submit" class="btn btn-primary">Reservieren</button>
            </div>
        </form>
    `,
};
