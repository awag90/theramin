module.exports = {


  friendlyName: 'PatientSignup',


  description: 'Sign up for a new patient account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    name:  {
      required: true,
      type: 'string',
      example: 'Wunderlich',
      description: 'The user\'s name.',
    },

    fistname:  {
      required: true,
      type: 'string',
      example: 'Fiona',
      description: 'The user\'s firstname.',
    },

    dob: {
      required: true, 
      type: 'string',
      example: '01.01.2000',
      description: 'The patients dob'
    },

  },


  exits: {

    success: {
      description: 'Neuer Account wurde erstellt'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'Der eingegeben Name, Emial oder Passwort nicht nicht valide',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'Die Emial wird bereits benutzt',
    },

    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging in from a web browser, the user is redirected away.',
      responseType: 'redirect'
    },

  },


  fn: async function ({emailAddress, password, name, firstname, dob}) {
sails.log.debug("Creating patient..")
    let newEmailAddress = emailAddress.toLowerCase();
    let params = req.allParams()
    let hashed = await sails.helpers.passwords.hashPassword(params.password)
   

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    let newUserRecord = await User.create(_.extend({
      name: params.name,
      firstname: params.firstname,
      dob: params.dob,
      emailAddress: newEmailAddress,
      password: hashed,
      tosAcceptedByIp: this.req.ip
    }, sails.config.custom.verifyEmailAddresses? {
      emailProofToken: await Sails.helpers.strings.random('url-friendly'),
      emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
      emailStatus: 'unconfirmed'
    }:{}))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();


    let patient = await Patient.create({dob: dob, user: newUserRecord.id})

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;
  
    if (!this.req.wantsJSON) {
      throw {redirect: '/pages/homepage'};
    }
  }

};
