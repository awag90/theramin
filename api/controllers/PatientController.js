/**
 * PatientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: async function (req, res) {
      
        sails.log.debug("get patient...")
        let patient = await Patient.findOne({ user: req.session.userId }).populate('user')
        delete patient.user.password
        res.view('pages/patient/show', { patient: patient })
        
    },

    edit: async function (req, res) {
        sails.log.debug("edit patient...")
        let patient = await Patient.findOne({ user: req.session.userId }).populate('user')
        delete patient.user.password
        res.view('pages/patient/edit-profile', { patient: patient })
    },

    update: async function (req, res) {
        sails.log.debug("updating patient...")
        let params = req.allParams()
        let patient = await Patient.updateOne({ user: req.session.userId }).set({ name: params.name, firstname: params.firstname, dob: params.dob })
        let user = await User.findOne({ id: req.session.userId })
        if (user.emailAddress != params.emailAddress.toLowerCase()) {
            let newEmailAddress = params.emailAddress.toLowerCase()
            let conflictingUsers = await User.find({ emailAddress: newEmailAddress })
            if (conflictingUsers.length > 0) {
                res.status(409)
                res.send("Die angegebene E-Mail-Adresse wird bereits verwendet")
            } else {
                user = await User.updateOne({ id: req.session.userId }).set({ emailAddress: newEmailAddress })
            }
        }

        res.redirect('/patient/show')
    }


};

