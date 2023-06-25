/**
 * WorktimeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    manage: async function (req, res) {
        sails.log.debug("Edit worktimes for therapist...")
        let therapist = await Therapist.findOne({ id: req.params.id }).populate('worktimes');
        res.view('pages/worktime/manage', { therapist: therapist })
    },

    createOrUpdate: async function (req, res) {
        sails.log.debug('Ceating or updating worktimes...')
        let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
        days.forEach(async function (day) {
            let from = req.param(day + '.from')
            let till = req.param(day + '.till')
            let entry = await Worktime.findOne({ therapist: req.param('therapist'), weekday: day })
            if (from !== undefined && till !== undefined && new Date("1970-01-01T" + till) > new Date("1970-01-01T" + from)) {
                if (entry !== undefined) {
                    let worktime = await Worktime.updateOne({ therapist: req.param('therapist'), weekday: day }).set({ from: from, till: till })
                } else {
                    let worktime = await Worktime.create({ therapist: req.param('therapist'), weekday: day, from: from, till: till }).fetch()
                }
            }
        })
        let therapist = await Therapist.findOne({ id: req.param('therapist') })
        res.redirect('practice/' + therapist.practice + '/admin')
    },

};

