export default {
  props: ["therapistId", "time"],
  data: function () {
    return {
      therapist: '',
      startTime: new Date(Number(this.time)),
      endTime: new Date(Number(this.time) + 30 * 60 * 1000),
      therapistName: '',
    };
  },

  async created() {
    let url = new URL(origin + "/therapist/" + this.therapistId);

    await fetch(url)
      .then((res) => res.json())
      .then((data) => (this.therapist = data));

    this.therapistName = this.therapist.firstname + " " + this.therapist.name;

  },
  template: `
        <form>
            Therapeut: {{this.therapistName}} <br/>
            Zeit: {{this.startTime}}

        </form>
    `,
};
