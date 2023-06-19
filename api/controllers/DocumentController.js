/**
 * DocumentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    uploadImageForm: async function (req, res) {
        sails.log.debug("Upload image form....");
        let appointment = await Appointment.findOne({ id: req.params.id });
       return res.view("pages/patient/uploadfile", { appointment: appointment });
      },
    
      uploadImage: async function (req, res) {
        sails.log("Upload image for appointment...");
    
        let params = {
          adapter: require("skipper-s3"),
          key: sails.config.s3accesskey,
          secret: sails.config.s3secret,
          bucket: "wetebucket",
          region: "us-west-2",
        };
    
        let callback = async function (err, uploadedFiles) {
          if (err) {
            return res.serverError(err);
          } else {
            sails.log("Uploaded!");
          }

        

          let fname = require("path").basename(uploadedFiles[0].fd);
          let documentName = req.body.documentName;// Holen Sie den Namen des Dokuments aus dem Formularfeld
    
          // Erstellen Sie das Dokument in der Datenbank
          let document = await Document.create({
            name: documentName,
            image: fname,
            appointment: req.params.id // Weisen Sie das Dokument dem Termin zu
          }).fetch();

         
          console.log("req.body:", req.body);
        
          // Fügen Sie das Dokument dem Termin hinzu
          await Appointment.addToCollection(req.params.id, 'document', document.id);
      
          return res.redirect("/patient/show");
        };
        await req.file("image").upload(params, callback);
      },
    }
    



