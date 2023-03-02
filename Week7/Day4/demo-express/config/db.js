const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
})

const db1 = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST1,
    port : process.env.DB_PORT1,
    user : process.env.DB_USER1,
    password : process.env.DB_PASS1,
    database : process.env.DB_NAME1
  }
})

module.exports = {
  db,
  db1
}
