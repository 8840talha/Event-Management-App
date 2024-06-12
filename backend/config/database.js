const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database : 'eventdb_jd6v',
  username: 'eventdb_jd6v_user',
  password: 'Sw2AGlM5iVDPvIIvDvj9ikxUUHrHJYGp',
  host: 'dpg-cpkppqi0si5c73cviv60-a.oregon-postgres.render.com', 
  port: 5432, 
});

module.exports = sequelize;
