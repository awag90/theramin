module.exports = {


    friendlyName: 'Get Appoinment',
  
  
    description: 'Returns appointment for therapist at time',
  
  
    inputs: {
      id: {
        description: 'The Id of the therapist',
        type: 'number',
        required: true,
      },
      fromDate: {
        description: 'The UTC- at which the timeslot starts',
        type: 'string',
        required: true,
      }, 
      tillDate: {
        description: 'The UTC- at which the timeslot starts',
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
      let fromDate = new Date(Number(inputs.fromDate))
      let tillDate = new Date(Number(inputs.tillDate))
      let appointments = await Appointment.find({therapist : inputs.id}).populate('patient')
      appointments = appointments.filter(e => (new Date(e.date).getTime() >= fromDate.getTime() && new Date(e.date).getTime() <= tillDate.getTime()))
      return appointments
    }
  };