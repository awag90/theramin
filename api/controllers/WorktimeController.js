/**
 * WorktimeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating worktime...")
        let params = req.allParams()
        let worktime = await Worktime.create(params).fetch()
       // res.redirect('/practice/' + therapist.practice + '/admin')
    },
    edit: async function (req, res) {
        sails.log.debug("Edit worktimes for therapist...")
        let worktime = await Therapist.findOne({ id: req.params.id }).populate('worktime');
        let sWorktime = await Worktime.find();
        res.view('pages/therapist/edit', { therapist: therapist, worktime:worktime })
    },
};

