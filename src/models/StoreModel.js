const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");

const Stores = sequelizeConfig.define("stores", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.DECIMAL(8, 6),
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL(9, 6),
    allowNull: false,
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
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  open_time: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  close_time: {
    type: Sequelize.TIME,
    allowNull: true,
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
  },
  open: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Stores;