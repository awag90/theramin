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
      appointments = appointments.filter(e => (new Date(new Date(e.date).getTime() + 180*60*1000).getTime() >= fromDate.getTime() && new Date(e.date).getTime() <= tillDate.getTime()))
      appointments.sort(function(a,b){return new Date(a.date.getTime() +new Date('1970-01-01T'+a.from).getTime()) - new Date(b.date.getTime()+new Date('1970-01-01T'+b.from).getTime())})
      return appointments
    }
  };