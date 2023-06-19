/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */


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
  'GET /practice/:id/admin': 'PracticeController.megaAdmin',
  'GET /practice/admin' : 'PracticeController.admin',
  'GET /practice/:id/edit': 'PracticeController.edit',
  'POST /practice/:id/update': 'PracticeController.update',
  'GET /practice/:id/addtherapist': 'PracticeController.addTherapist',
  'GET /practice/:id/destroy' : 'PracticeController.destroy',

  //Therapists
  'POST /therapist': 'TherapistController.create',
  'GET /therapist/new' : { view: 'pages/therapist/new'},
  'GET /therapist/:id/edit':'TherapistController.edit',
  'POST /therapist/:id/update': 'Therapist.update',
  'GET /therapist/:id/destroy': 'Therapist.destroy',
  'GET /therapist/:id/worktimes': 'Worktime.manage',
  'GET /therapist/appointments' : 'TherapistController.find',
  'GET /therapist/overview' : 'TherapistController.show',
 
  //Patient
  'GET /patient/show': 'PatientController.find',
  'GET /patient/edit-profile': 'PatientController.edit',
  'POST /patient/update': 'PatientController.update',


  //Account
  'GET /account/edit-password': {action: 'account/view-edit-password'},
  'POST /update-password': {action: 'account/update-password'},

  //Worktime
  'POST /worktime': 'WorktimeController.createOrUpdate',

  //Appointments
  'POST /appointment-as-pat': 'AppointmentController.createAsPatient',
  'POST /appointment-as-therapist' : 'AppointmentController.createAsTherapist',
  'GET /appointment/:id/delete': 'AppointmentController.delete',
  'GET /appointment/new' : 'AppointmentController.new',

  //Documents
  'GET /appointment/:id/uploadImageForm': 'DocumentController.uploadImageForm' ,
  'POST /appointment/:id/uploadImage': 'DocumentController.uploadImage' ,
  //Signup
  'GET /entrance/signup':{view: 'pages/entrance/signup'},
  'POST /signup-patient' :{action: 'entrance/signup-patient'},
  'GET /signup': {action: 'entrance/view-signup'},

  //Login
  'GET /login': {action:'entrance/view-login'},
  'GET /entrance/login':{view: 'pages/entrance/login'},
  'POST /login':{action:'entrance/login'},

  //Logout
  'GET /logout': {action:'account/logout'},

  //REST-Endpoints
  'GET /practice/:practice/therapists': {action: 'therapist/therapists-for-practice'},
  'GET /therapist/:id' : {action: 'therapist/get-therapist'},
  'GET /therapist/:id/appointment/:time': {action: 'therapist/get-appointment-for-time'},
  'GET /me': {action: 'account/get-me'}, 
  'GET /patient/:id/appointments': {action: 'patient/get-appointments'},
  'GET /practice/:id/getInfo': {action: 'practice/get-practice'},
  'GET /therapist/:id/appointments/from/:fromDate/till/:tillDate': {action: 'therapist/get-appointment-by-criteria'},
  'GET /therapist/:id/patients' : {action: 'therapist/get-patients-for-therapist'},


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
