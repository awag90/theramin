module.exports = {


  friendlyName: 'Get Appoinment',


  description: 'Returns appointment for therapist at time',


  inputs: {
    id: {
      description: 'The Id of the therapist',
      type: 'number',
      required: true,
    },
    time: {
      description: 'The UTC-time at which the timeslot starts',
      type: 'string',
      required: true,
    }
  },


  exits: {
    success: {

    },
  },


  fn: async function (inputs) {
    sails.log.debug("Searching for appoinment")
    let datetime = new Date(Number(inputs.time) + 2 * 60 * 60 * 1000); //Zeitverschiebung
    let date = datetime.toISOString().substring(0, 10)
    let time = datetime.toISOString().substring(11, 16)
    let appointments = await Appointment.find({ therapist: inputs.id, date: date, from: time })
    sails.log.debug(appointments.length)
    return appointments
  }
};