const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating therapist...")
        let params = req.allParams()
        let therapist = await Therapist.create(params).fetch()
        res.redirect('/practice/admin')
    },
}