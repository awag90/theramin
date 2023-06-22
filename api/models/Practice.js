/**
 * Practice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
        name: { type: 'string', columnType: 'varchar(50)', required: true,minLength: 3, maxLength: 50,example: "Bleib Fit!" },
        street: { type: 'string', columnType: 'varchar(50)', required: true,example: "Richard-Müller-Straße" },
        streetnumber: { type: 'string', columnType: 'varchar(10)', required: true,maxLength: 10,example: "20" },
        zip: { type: 'string', columnType: 'varchar(10)', required: true, regex: /^\d{5}$/,example: "78056" },
        city: { type: 'string', columnType: 'varchar(50)', required: true,example: "Berlin" },
        description: { type: 'string', columnType: 'text', required: false,maxLength: 500 },

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        therapists: { collection: 'therapist', via: 'practice' }
    },
}