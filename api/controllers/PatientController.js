/**
 * PatientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    findOne: async function (req, res) {
        sails.log.debug("get patient...")
        let patient = await Patient.findOne({user:req.session.userId}).populate('user')
        sails.log.debug(patient)
          res.view('pages/patient/show', { patient: patient })
    },
  
};

