/**
 * AppointmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Appointment = require("../models/Appointment");

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

  new: async function (req, res) {
    sails.log.debug("Opening new Appointments site...");
    let therapist = await Therapist.findOne({ user: req.session.userId }).populate("worktimes").populate("appointments");
    res.view("pages/therapist/create-appointment", { therapist: therapist });
  },

  delete: async function (req, res) {
    sails.log.debug("Deleting appointment...");
    let appoinment = await Appointment.destroyOne({ id: req.params.id });
    res.ok();
  },

  uploadImageForm: async function (req, res) {
    sails.log.debug("Upload image form....");
    let appoinment = await Appointment.findOne({ id: req.params.id });
    if(!appointment){
      return res.serverError("Termin nicht gefunden");
    }

   return res.view("pages/patient/uploadfile", { appointment: appoinment });
  },

  uploadImage: async function (req, res) {
    sails.log("Upload image for appoinment...");

    let params = {
      adapter: require("skipper-s3"),
      key: sails.config.s3accesskey,
      secret: sails.config.s3secret,
      bucket: "wetebucket",
      region: "us-west-2",
    };

    let callback = async function (err, uploadedFiles) {
      if (err) {
        return res.serverError(err);
      } else {
        sails.log("Uploaded!");
      }
      let fname = require("path").basename(uploadedFiles[0].fd);
      await Appointment.updateOne({ id: req.params.id }).set({ image: fname });
      return res.redirect("/show");
    };

    await req.file("image").upload(params, callback);
  },
};
