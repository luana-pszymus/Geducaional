const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // true para ver queries
});

module.exports = sequelize;
