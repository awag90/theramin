/**
 * WorktimeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating worktime...")
        let params = req.allParams()
        let worktime = await Worktime.create(params)
        let.redirect('/therapist/' + req.params.id )
    },
    edit: async function (req, res) {
        sails.log.debug("Edit worktimes for therapist...")
        let therapist = await Therapist.findOne({ id: req.params.id }).populate('worktime');
        let worktime = await Worktime.find();
        res.view('pages/therapist/edit', { therapist: therapist, worktime:worktime })
    },

    update: async function (req, res) {
        sails.log.debug('Updating therapist...')
        let params = req.allParams()
        await Therapist.updateOne({ id: req.params.id }).set(params)
        res.redirect('/practice/' + req.params.id + '/admin')
    },
};

