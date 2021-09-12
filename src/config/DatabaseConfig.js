const { Sequelize } = require("sequelize");

const SequelizeConfig = new Sequelize(
  "foodguru",
  "postgres",
  "123456",
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  }
);

module.exports = SequelizeConfig;