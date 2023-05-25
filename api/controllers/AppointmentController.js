/**
 * AppointmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: async function (req, res) {
        sails.log.debug("Listing all appointments...")
        let appointments = await appointments.find(patient.appointments).populate('patient')     
        res.view('pages/patient/show', { appointments: appointments })
    },
};

