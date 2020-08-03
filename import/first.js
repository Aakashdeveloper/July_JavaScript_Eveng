var dbObj = {}

dbObj.users=[
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'John',
        role:'User'
    }
]

dbObj.dbquery = {
    find:(table) => {return `select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

module.exports = dbObj;