/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  
  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'practice/therapists': true,

  PracticeController: {
    '*': 'is-practice-admin',
    'find': true,
    'create': true,
    'findByCriteria': true,
    'findOne': true,
    'megaAdmin': 'is-mega-admin'
  },

  TherapistController: {
    '*': 'is-practice-admin',
    'create': true
  },

  WorktimeController: {
    '*': 'is-practice-admin',
  }

  
  
};
