const Sails = require("sails/lib/app/Sails");

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Creating therapist...")
        let params = req.allParams()
        let therapist = await Therapist.create(params).fetch()
        res.redirect('/practice/'+therapist.practice.id+'/admin')
    },
    
    edit: async function (req,res){
        sails.log.debug("Opening Edit-Site for therapist...")
        let therapist = await Therapist.findOne({id:req.params.id}).populate('specialisation');
        let specialisations = await Specialisation.find();
        res.view('pages/therapist/edit',{therapist:therapist, specialisations:specialisations})
    },

    update: async function(req, res){
        sails.log.debug('Updating therapist...')
        let params = req.allParams()
        await Therapist.updateOne({ id: req.params.id }).set(params)
        res.redirect('/practice/'+req.params.id+'/admin')
    },
}