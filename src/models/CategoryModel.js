const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");

const Categories = sequelizeConfig.define("categories", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Categories;