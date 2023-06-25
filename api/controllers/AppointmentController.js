/**
 * AppointmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createAsPatient: async function (req, res) {
    sails.log.debug("Creating appointment...");
    let patient = await Patient.findOne({ user: req.session.userId });
    let params = req.allParams();
    sails.log.debug(params.date);
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

  createAsTherapist: async function (req, res) {
    sails.log.debug("Creating appointment...");
    let params = req.allParams();
    let therapist = await Therapist.findOne({ id: params.therapist });
    let patient = "";
    if (params.patId != undefined) {
      patient = await Patient.findOne({ id: params.patId });
    } else {
      patient = await Patient.create({
        name: params.patName,
        firstname: params.patFirstname,
      }).fetch();
    }
    sails.log.debug(patient)
    let till = new Date(new Date(params.date + "T" + params.time).getTime() + 30 * 60 * 1000).toLocaleTimeString("de-DE");
    let appointment = await Appointment.create({
      therapist: therapist.id,
      patient: patient.id,
      date: params.date,
      from: params.time,
      till: till,
      indication: params.indication,
    });
    res.redirect("/therapist/overview");
  },

  new: async function (req, res) {
    sails.log.debug("Opening new Appointments site...");
    let therapist = await Therapist.findOne({ user: req.session.userId })
      .populate("worktimes")
      .populate("appointments");
    res.view("pages/therapist/create-appointment", { therapist: therapist });
  },

  show: async function (req, res) {
    sails.log.debug("Opening appointment details...")
    let appointment = await Appointment.findOne({ id: req.params.id }).populate('therapist').populate('patient').populate('documents')
    res.view('pages/appointment/show', { appointment: appointment })
  },

  delete: async function (req, res) {
    sails.log.debug("Deleting appointment...");
    let appoinment = await Appointment.destroyOne({ id: req.params.id });
    res.ok();
  },
}
