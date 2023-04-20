module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(50)', required: true },
        firstname: { type: 'string', columnType: 'varchar(50)', required: true },
        isAdmin: { type: 'boolean', columnType: 'boolean', required: true },
        practice: { model:'practice', required: true },
        specialisation: {model:'specialisation'}
    },
}