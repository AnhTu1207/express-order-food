const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
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
    allowNull: false,
  },
  driver_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
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

Drivers.hasMany(Orders, {
  foreignKey: "driver_id"
});
Orders.belongsTo(Drivers, {
  foreignKey: "driver_id"
});

Stores.hasMany(Orders, {
  foreignKey: "store_id"
});
Orders.belongsTo(Stores, {
  foreignKey: "store_id"
});

Users.hasMany(Orders, {
  foreignKey: "user_id"
});
Orders.belongsTo(Users, {
  foreignKey: "user_id"
});

module.exports = Orders;