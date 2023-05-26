/**
 * AppointmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Creating appointment...");
    let patient = await Patient.findOne({ user: req.session.userId });
    let params = req.allParams()
    sails.log.debug(params.date)
    let appointment = await Appointment.create({
      patient: patient.id,
      therapist: params.therapist,
      date: params.date,
      from: params.from,
      till: params.till,
      indication: params.indication,
    });
    res.redirect("/");
  },

};
