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
    sails.log.debug("Loading therapist")
    let therapist = await Therapist.findOne({ id: inputs.id }).populate('specialisation').populate('worktimes').populate('appointments');
    return therapist;
  }

};