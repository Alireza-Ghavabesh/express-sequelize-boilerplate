const Sequelize = require("sequelize");

const sequelize = require("./../config/connection");

const User = sequelize.define(
  "Users",
  {
    user_id: Sequelize.STRING,
    time: Sequelize.STRING,
    text: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = User;
