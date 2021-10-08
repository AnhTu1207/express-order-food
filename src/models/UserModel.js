const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");

const Users = sequelizeConfig.define("users", {
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
  avatar: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  is_verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  role: {
    type: Sequelize.ENUM,
    values: [
      "user",
      "admin"
    ],
    defaultValue: "user",
  },
  fb_id: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
});

module.exports = Users;