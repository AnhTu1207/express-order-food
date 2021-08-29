const { Sequelize } = require("sequelize");
const { sequelizeConfig } = require(appRoot + "/config");

// Import referent model for foreign key
const Drivers = require("./DriverModel");
const Stores = require("./StoreModel");
const Users = require("./UserModel");

const Orders = sequelizeConfig.define("orders", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  store_id: {
    type: Sequelize.STRING,
    references: {
      model: Stores,
      key: "id",
    },
    allowNull: false,
  },
  driver_id: {
    type: Sequelize.STRING,
    references: {
      model: Drivers,
      key: "id",
    },
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING,
    references: {
      model: Users,
      key: "id",
    },
    allowNull: false,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: [
      "processing_order",
      "finding_driver",
      "driver_accept",
      "cooking_foods",
      "delivering",
      "done",
    ],
  },
});

// Get reference
// Drivers
Drivers.hasMany(Orders, { foreignKey: "driver_id" });
Orders.belongsTo(Drivers, { foreignKey: "driver_id" });
// Stores
Stores.hasMany(Orders, { foreignKey: "store_id" });
Orders.belongsTo(Stores, { foreignKey: "store_id" });
// Users
Users.hasMany(Orders, { foreignKey: "user_id" });
Orders.belongsTo(Users, { foreignKey: "user_id" });

module.exports = Orders;
