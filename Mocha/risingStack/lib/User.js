'use strict'

const db = require('./database')

const tableName = 'users'

function up() {
    return db.schema.createTableIfNotExists(tableName, (table) => {
        table.increments()
        table.string('name')
        table.timestampts()
    })
}

module.exports = {
    up
}
