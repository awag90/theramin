/**
 * Therapist.js
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
        firstname: { type: 'string', columnType: 'varchar(50)', required: true },
        isAdmin: { type: 'boolean', columnType: 'boolean', required: false },

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        practice: { model: 'practice', required: true },
        specialisation: { model: 'specialisation', required: true },
        appointments: {collection: 'appointment', via: 'therapist'},
        worktimes: {collection: 'worktime', via: 'therapist'}
    },
}