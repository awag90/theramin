module.exports = {


    friendlyName: 'Therapists',
  
  
    description: 'Get all therapists working at a practice',
  
  
    inputs: {
      practice: {
        description: 'The Id of the practice',
        type: 'int',
        required: true,
      }
    },
  
  
    exits: {
      success: {
  
      },
    },
  
  
    fn: async function (inputs) {
      let therapists = await Therapist.find({practice: inputs.practice}).poulate('specialisation').poulate('user').poulate(worktimes); 
      return therapists;
    }
  
  };