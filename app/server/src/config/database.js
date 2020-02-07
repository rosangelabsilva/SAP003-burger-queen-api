require('dotenv').config();

module.exports = {
  "development": {
    "username": 'postgres',
    "password": null,
    "database": 'burguerqueen',
    "host": 'bq-api-node_db',
    "dialect": 'postgres',
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "burguerqueen_test",
    "host": "bq-api-node_db",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}