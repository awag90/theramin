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
        sails.log.debug("Found practices")
        res.view('pages/practice/search', { practices: practices })
    },

    findByCriteria: async function (req, res) {
        sails.log.debug("Searching matching practices");
        if (req.param('name') !== "" && req.param('zip') === ""){
            let practices = await Practice.find({name:req.param('name')})
            sails.log.debug("name: " + req.param('name') )
            res.view('pages/practice/search', { practices: practices })
        }else if (req.param('zip')!=="" && req.param('name') === ""){
            let practices = await Practice.find({zip:req.param('zip')})
            sails.log.debug("zip: " + req.param('zip'))
            res.view('pages/practice/search', { practices: practices })
        }else if (req.param('name') !== "" && req.param('zip') !== ""){
            let practices = await Practice.find({zip:req.param('zip'), name:req.param('name')})
            sails.log.debug("name: " + req.param('name')  +", zip: " + req.param('zip'))
            res.view('pages/practice/search', { practices: practices })
        }
    },

    findOne: async function (req, res) {
        sails.log.debug('Finding single practice...')
        let practice = await Practice.findOne({ id: req.params.id })
        res.view('pages/practice/show', { practice: practice })
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