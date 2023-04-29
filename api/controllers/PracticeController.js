/**
 * PracticeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating practice...")
        let params = req.allParams()
        let practice = await Practice.create(params).fetch()
        res.redirect('practice/'+ practice.id + '/admin')
    },

    find: async function (req, res) {
        sails.log.debug("Listing all practices...")
        let practices = await Practice.find().populate('therapists')
        let specialisations = await Specialisation.find()
        res.view('pages/practice/search', { practices: practices, specialisations: specialisations })
    },

    findByCriteria: async function (req, res) {
        let practices = await Practice.find().populate('therapists')
        if (req.param('name') !== undefined && req.param('name') !== "") {
            sails.log.debug("Filter by name...")
            practices = practices.filter(e => e.name.toLowerCase().includes(req.param('name').toLowerCase()))
        }
        if (req.param('zip') !== undefined && req.param('zip') !== "") {
            sails.log.debug("Filter by ZIP...")
            practices = practices.filter(e => e.zip === req.param('zip'))
        }
        if (req.param('specialisation') !== '-1') {
            sails.log.debug("Filter by specialisation...")
            practices = practices.filter(function (e) {
                return (e.therapists.filter(t => t.specialisation.toString() === req.param('specialisation')).length > 0)
            })
        }
        let specialisations = await Specialisation.find()
        res.view('pages/practice/search', { specialisations: specialisations, practices: practices })
    },

    findOne: async function (req, res) {
        sails.log.debug('Finding single practice...')
        let practice = await Practice.findOne({ id: req.params.id }).populate('therapists')
        let therapists = await Therapist.find({practice: practice.id}).populate('specialisation')
        res.view('pages/practice/show', { practice: practice, therapists: therapists })
    },

    destroy: async function (req, res) {
        sails.log.debug('Deleting practice...')
        let therapists = await Therapist.destroy({practice: req.params.id})
        let practice = await Practice.destroyOne({ id: req.params.id })
        res.redirect('/')
    },

    update: async function (req, res) {
        sails.log.debug('Updating practice...')
        let params = req.allParams()
        await Practice.updateOne({ id: req.params.id }).set(params)
        res.redirect('/practice/' + req.params.id + '/admin')
    },

    admin: async function (req, res) {
        sails.log.debug('Opening Admin-Site for practice...')
        let practice = await Practice.findOne({ id: req.params.id }).populate('therapists')
        let therapists = await Therapist.find({ practice: practice.id }).populate('specialisation').populate('worktimes').populate('user')
        res.view('pages/practice/admin', { practice: practice, therapists: therapists })
    },

    edit: async function (req, res) {
        sails.log.debug('Opening Edit-Site for practice...')
        let practice = await Practice.findOne({ id: req.params.id })
        res.view('pages/practice/edit', { practice: practice })
    },

    addTherapist: async function (req, res) {
        sails.log.debug('Opening new therapist Site...')
        let practice = await Practice.findOne({ id: req.params.id })
        let specialisations = await Specialisation.find()
        res.view('pages/therapist/new', { practice: practice, specialisations: specialisations })
    },


}