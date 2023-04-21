/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const TherapistController = require("../api/controllers/TherapistController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  //Practice
  'GET /practice': 'PracticeController.find',
  'GET /practice/new': { view: 'pages/practice/new' },
  'GET /practice/:id': 'PracticeController.findOne',
  'POST /practice': 'PracticeController.create',
  'GET /practice/filtered': 'PracticeController.findByCriteria',
  'GET /practice/:id/admin': 'PracticeController.admin',
  'GET /practice/:id/edit': 'PracticeController.edit',
  'POST /practice/:id/update': 'PracticeController.update',
  'GET /practice/:id/addtherapist': 'PracticeController.addTherapist',

  //Therapists
  'POST /therapist': 'TherapistController.create',
  'GET /therapist/new' : { view: 'pages/therapist/new'},
  'GET /therapist/:id/edit':'TherapistController.edit',
  'POST /therapist/:id/update': 'Therapist.update',
  'GET /therapist/:id/destroy': 'Therapist.destroy'

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
