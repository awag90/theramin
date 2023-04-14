module.exports = {
    attributes:{
        name: {type:'string' ,columnType: 'varchar(50)', required: true},
        street: {type:'string' ,columnType: 'varchar(50)', required: true},
        streetnumber: {type:'string' ,columnType: 'varchar(10)', required: true},
        zip: {type:'string' ,columnType: 'varchar(10)', required: true},
        city: {type:'string' ,columnType: 'varchar(50)', required: true}
    },
}