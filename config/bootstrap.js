/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.

  // Set up Specialisations
  if (await Specialisation.count() === 0){
    await Specialisation.createEach([
      {name: 'Physiotherapie'},
      {name: 'Ergotherapie'},
      {name: 'Logopädie'},
      {name: 'Psychotherapie'}
    ])
  }

  // Set up fake development data 
  if (await User.count() === 0) {
    await User.createEach([
      { emailAddress: 'an741wag@htwg-konstanz.de',name: 'Wagner', firstname:'Andreas', password: await sails.helpers.passwords.hashPassword('start123'), isTherapist: true, isPracticeAdmin: true, isMegaAdmin: true },
      { emailAddress: 'fi741wun@htwg-konstanz.de',name: 'Wunderlich', firstname:'Fiona', password: await sails.helpers.passwords.hashPassword('start123'), isTherapist: true, isPracticeAdmin: true, isMegaAdmin: true },
      ]);
  }

  if (await Practice.count() === 0){
    await Practice.create({name: 'Test-Praxis', street: 'Alfred-Wachtel-Str.', streetnumber: '8', zip:'78462', city:'Konstanz' });
  }

  if (await Therapist.count() === 0){
    await Therapist.createEach([
      {specialisation: 1, practice: 1, user: 1},
      {specialisation: 2, practice: 1, user: 2}
    ]);
  }

};
