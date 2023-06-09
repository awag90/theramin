/**
 * TherapistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    try {
      sails.log.debug("Creating therapist...");
      let params = req.allParams();
      let isAdmin = params.isAdmin !== undefined;
      let newEmailAddress = params.emailAddress.toLowerCase();
      let hashed = await sails.helpers.passwords.hashPassword(params.password);

      let newUserRecord = await User.create(
        _.extend(
          {
            isTherapist: true,
            isPracticeAdmin: isAdmin,
            emailAddress: newEmailAddress,
            password: hashed,
          },
          sails.config.custom.verifyEmailAddresses
            ? {
                emailProofToken: await Sails.helpers.strings.random(
                  "url-friendly"
                ),
                emailProofTokenExpiresAt:
                  Date.now() + sails.config.custom.emailProofTokenTTL,
                emailStatus: "unconfirmed",
              }
            : {}
        )
      )
        .intercept("E_UNIQUE", "emailAlreadyInUse")
        .intercept({ name: "UsageError" }, "invalid")
        .fetch();

      let therapist = await Therapist.create({
        specialisation: params.specialisation,
        practice: params.practice,
        user: newUserRecord.id,
        name: params.name,
        firstname: params.firstname,
      }).fetch();

      if (!req.session.userId) {
        req.session.userId = newUserRecord.id;
      }
      res.redirect("/practice/admin");
    } catch (err) {
      if (err.code === "E_UNIQUE") {
        // E-Mail-Adresse bereits vorhanden
        return res.view("createTherapist", {
          error: "Die E-Mail-Adresse ist bereits in Verwendung.",
        });
      } else if (err.name === "UsageError") {
        // Ungültige Eingaben
        return res.view("createTherapist", { error: "Ungültige Eingaben." });
      } else {
        // Andere Fehler
        return res.serverError(err);
      }
    }
  },

  edit: async function (req, res) {
    sails.log.debug("Opening Edit-Site for therapist...");
    let therapist = await Therapist.findOne({ id: req.params.id })
      .populate("specialisation")
      .populate("user");
    delete therapist.user.password;
    let specialisations = await Specialisation.find();
    res.view("pages/therapist/edit", {
      therapist: therapist,
      specialisations: specialisations,
    });
  },

  update: async function (req, res) {
    sails.log.debug("Updating therapist...");
    let params = req.allParams();
    let newEmailAddress = params.emailAddress.toLowerCase();
    let isAdmin = params.isAdmin !== undefined;
    let therapist = await Therapist.updateOne({ id: params.id }).set({
      name: params.name,
      firstname: params.firstname,
      specialisation: params.specialisation,
    });
    let user = await User.updateOne({ id: therapist.user }).set({
      emailAddress: newEmailAddress,
      isPracticeAdmin: isAdmin,
    });
    if ((user.id = req.session.userId)) {
      res.redirect("/therapist/overview");
    } else {
      res.redirect("/practice/admin");
    }
  },

  destroy: async function (req, res) {
    sails.log.debug("Deleting therapist...");
    let worktimes = await Worktime.destroy({ therapist: req.params.id });
    let therapist = await Therapist.destroyOne({ id: req.params.id });
    let user = await User.destroyOne({ id: therapist.user });
    res.redirect("/practice/admin");
  },

  show: async function (req, res) {
    sails.log.debug("Loading therapist overview...");
    let therapist = await Therapist.findOne({ user: req.session.userId })
      .populate("practice")
      .populate("worktimes")
      .populate("user");
    res.view("pages/therapist/show", { therapist: therapist });
  },
};
