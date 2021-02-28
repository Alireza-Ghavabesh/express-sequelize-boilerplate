const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:rasekhon.db");

module.exports = sequelize;
