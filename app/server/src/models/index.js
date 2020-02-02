'use strict';

require('dotenv').config()
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.js')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  //sequelize = new Sequelize(process.env[config.use_env_variable], config);
  console.log("database: " + config.database + 
  " username: " + config.username + 
  " password: " + config.password + 
  " host: " + config.host + 
  " DB_URL: " + process.env.DATABASE_URL);
  //sequelize = new Sequelize(config.database, config.username, config.password, {host: config.host, dialect: 'postgres'});
  sequelize = new Sequelize('postgres://vnevgxjydpqqsg:bf67a85351f0f8016dfd1ec73093b5240ff27f0384afb6de1652f0d5e67043d8@ec2-174-129-33-107.compute-1.amazonaws.com:5432/d3aa38r6fm4rle')
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;