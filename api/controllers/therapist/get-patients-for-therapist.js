module.exports = {


  friendlyName: 'Get Patients for therapist',


  description: 'Returns all patients for therapist',


  inputs: {
    id: {
      description: 'The Id of the therapist',
      type: 'number',
      required: true,
    },

  },


  exits: {
    success: {

    },
  },


  fn: async function (inputs) {
    sails.log.debug("Searching for patients")
    let appointments = await Appointment.find({ therapist: inputs.id }).populate("patient")
    let patients = []
    appointments.forEach((e) => {
      if (patients.filter(p => (e.patient.id == p.id)).length == 0) {
        patients.push(e.patient)
      }
    })
    patients.sort(function (a, b) { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()) })
    return patients
  }
};