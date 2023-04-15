const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating practice...")
        let params = req.allParams()
        let practice = await Practice.create(params).fetch()
        res.redirect('pages/practice/show', { id: practice.id })
    },

    find: async function (req, res) {
        sails.log.debug("Listing all practices...")
        let practices = await Practice.find()
        res.view('pages/practice/index', { practices: practice })
    },

    findOne: async function (req, res) {
        sails.log.debug('Finding single practice...')
        let practice = await Practice.findOne({ id: req.params.id })
        res.view('pages/meal/show', { practice: practice })
    },

    destroy: async function (req, res) {
        sails.log.debug('Deleting practice...')
        let practice = await Practice.destroyOne({ id: req.params.id })
        res.redirect('/practice')
    },

    update: async function (req, res) {
        sails.log.debug('Updating practice...')
        let params = req.allParams();
        await Practice.updateOne({ id: req.params.id }).set(params)
        res.redirect('/practice')
    }


}