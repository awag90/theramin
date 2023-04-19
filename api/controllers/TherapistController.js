const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating therapist...")
        let params = req.allParams()
        let therapist = await Therapist.create(params).fetch()
        res.redirect('/practice/admin')
    },
    edit: async function (req,res){
        sails.log.debug("Opening Edit-Site for therpist...")
        let therapist = await Therapist.findOne({id:req.params.id});
        res.view('pages/therapist/edit',{therapist:therapist})
    },
}