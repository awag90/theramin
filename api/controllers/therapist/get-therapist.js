module.exports = {


    friendlyName: 'Find Therapist',
  
  
    description: 'Get therapists by ID',
  
  
    inputs: {
      id: {
        description: 'The Id of the therpist',
        type: 'number',
        required: true,
      }
    },
  
  
    exits: {
      success: {
  
      },
    },
  
  
    fn: async function (inputs) {
      sails.log.debug("Loading therapists")
      let therapist = await Therapist.find({praidctice: inputs.id}).populate('specialisation').populate('user'); 
      return therapist;
    }
  
  };