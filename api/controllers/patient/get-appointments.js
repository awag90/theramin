module.exports = {


  friendlyName: 'Get Appoinment',


  description: 'Returns all appointments for patient',


  inputs: {
    id: {
      description: 'The Id of the patient',
      type: 'number',
      required: true,
    },

  },


  exits: {
    success: {

    },
  },


  fn: async function (inputs) {
    sails.log.debug("Searching for appoinments")
    let appointments = await Appointment.find({ patient: inputs.id }).populate('therapist').populate('documents')
    
    appointments.sort(function (a, b) { 
      return new Date(b.date.getTime() + new Date('1970-01-01T' + b.from).getTime()) 
        - new Date(a.date.getTime() + new Date('1970-01-01T' + a.from).getTime()) 
    })

    return appointments
  }
};