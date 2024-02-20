const configs = require('dotenv');
const { Sequelize } = require('sequelize');

configs.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        timezone: '-06:00',
        logging: false,
    }
);

module.exports = sequelize;