module.exports = {


    friendlyName: 'Therapists',
  
  
    description: 'Get all therapists working at a practice',
  
  
    inputs: {
      practice: {
        description: 'The Id of the practice',
        type: 'number',
        required: true,
      }
    },
  
  
    exits: {
      success: {
  
      },
    },
  
  
    fn: async function (inputs) {
      sails.log.debug("Loading therapists for practice")
      let therapists = await Therapist.find({practice: inputs.practice}).populate('specialisation').populate('worktimes'); 
      return therapists;
    }
  
  };