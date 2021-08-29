const { Sequelize } = require("sequelize");
const { sequelizeConfig } = require(appRoot + "/config");

// Import referent model for foreign key
const Categories = require("./CategoryModel");
const Stores = require("./StoreModel");

const Foods = sequelizeConfig.define("foods", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  store_id: {
    type: Sequelize.STRING,
    references: {
      model: Stores,
      key: "id",
    },
    allowNull: false,
  },
  category_id: {
    type: Sequelize.STRING,
    references: {
      model: Categories,
      key: "id",
    },
    allowNull: false,
  },
});

// Get reference

// Categories
Categories.hasMany(Foods, { foreignKey: "category_id" });
Foods.belongsTo(Categories, { foreignKey: "category_id" });
// Stores
Stores.hasMany(Foods, { foreignKey: "store_id" });
Foods.belongsTo(Stores, { foreignKey: "store_id" });

module.exports = Foods;
