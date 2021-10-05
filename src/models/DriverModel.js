const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");

const Drivers = sequelizeConfig.define("drivers", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  total_rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Drivers;
