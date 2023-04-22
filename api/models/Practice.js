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
        name: { type: 'string', columnType: 'varchar(50)', required: true },
        street: { type: 'string', columnType: 'varchar(50)', required: true },
        streetnumber: { type: 'string', columnType: 'varchar(10)', required: true },
        zip: { type: 'string', columnType: 'varchar(10)', required: true },
        city: { type: 'string', columnType: 'varchar(50)', required: true },
        description: { type: 'string', columnType: 'text', required: false },

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        therapists: { collection: 'therapist', via: 'practice' }
    },
}