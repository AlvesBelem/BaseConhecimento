const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // migrate inicia automaticamente ao iniciar sistema
module.exports = knex