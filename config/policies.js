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
  'therapist/therapists-for-practice': true,
  'therapist/get-therapist': true,
  'therapist/get-appointment-for-time': true,
  'account/get-me': true,
  'practice/get-practice': true,
  'therapist/get-appointment-by-criteria': true,

  PracticeController: {
    '*': 'is-practice-admin',
    'find': true,
    'create': true,
    'findByCriteria': true,
    'findOne': true,
    'megaAdmin': 'is-mega-admin'
  },

  TherapistController: {
    '*': 'is-therapist',
    'create': true, 
    'destroy': 'is-practice-admin', 
  },

  WorktimeController: {
    '*': 'is-practice-admin',
  }

  
  
};
