const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:users.db");

module.exports = sequelize;
