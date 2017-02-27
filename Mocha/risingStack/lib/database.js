'use strict'

const createKnex = require('knex')

const knex = createKnex({
    client: 'pg',
    connection: 'postgres://@localhost:3000/nodejs_at_scale'
})

module.exports = knex
