const { Sequelize } = require("sequelize");
const { sequelizeConfig } = require(appRoot + "/config");

const User = sequelizeConfig.define("User", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
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
  fb_id: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
});

module.exports = User;