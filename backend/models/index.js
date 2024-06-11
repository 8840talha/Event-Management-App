
const sequelize = require('../config/database');
const Event = require('./event');

const db = {
  sequelize,
  Event,
};

module.exports = db;
