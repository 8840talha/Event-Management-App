const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  guests: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  agenda: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'events',
  timestamps: true,
  underscored: true,
});

module.exports = Event;
