const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('licanda_exam', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;