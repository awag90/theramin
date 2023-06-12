/**
 * TherapistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
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
    res.redirect("/practice/" + therapist.practice + "/admin");
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
    res.redirect("/practice/" + therapist.practice + "/admin");
  },

  destroy: async function (req, res) {
    sails.log.debug("Deleting therapist...");
    let user = await User.destroyOne({ id: req.param.user });
    let therapist = await Therapist.destroyOne({ id: req.params.id });
    res.redirect("/practice/" + therapist.practice + "/admin");
  },

  show: async function (req, res) {
    sails.log.debug("Loading therapist overview...");
    let therapist = await Therapist.findOne({ id: req.session.userId })
      .populate("practice")
      .populate("worktimes")
      .populate("user");
    res.view("pages/therapist/show", { therapist: therapist })
  },
};
