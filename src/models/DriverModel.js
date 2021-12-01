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
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bike_number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  total_rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  is_verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  is_open: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

module.exports = Drivers;
