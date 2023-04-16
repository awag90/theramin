module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(50)', required: true },
        therapists: {collection: 'therapist', via: 'specialisations'}
    },
}