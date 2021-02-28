const Sequelize = require("sequelize");

const sequelize = require("./../config/connection");

const User = sequelize.define(
  "Users",
  {
    nam: Sequelize.STRING,
    nam_khanevadegi: Sequelize.STRING,
    mobile: Sequelize.STRING,
    code_jahadgar: Sequelize.STRING,
    tarikh_tavalod: Sequelize.STRING,
    code_meli: Sequelize.STRING,
    tarikh_sabt_nam: Sequelize.STRING,
    alaghemandi: Sequelize.STRING,
    komite: Sequelize.STRING,
    aks: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = User;
