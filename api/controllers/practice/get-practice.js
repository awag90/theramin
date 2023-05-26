module.exports = {


    friendlyName: 'Find Practice',
  
  
    description: 'Get practice by ID',
  
  
    inputs: {
      id: {
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
      sails.log.debug("Loading practice")
      let practice = await Practice.findOne({id: inputs.id}); 
      return practice;
    }
  
  };