const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Drivers = require("./DriverModel");
const Users = require("./UserModel");
const Coupons = require("./CouponModel");

const Orders = sequelizeConfig.define("orders", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  store_id: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  driver_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  coupon_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  driver_rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
  },
  store_rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: '0',
  },
  status: {
    type: Sequelize.ENUM,
    values: [
      "processing_order",
      "finding_driver",
      "cooking_foods",
      "delivering",
      "done",
    ],
    defaultValue: 'processing_order',
  },
  payment_option: {
    type: Sequelize.ENUM,
    values: [
      "cash",
      "banking",
    ],
  }
});

Drivers.hasMany(Orders, {
  foreignKey: "driver_id",
  onDelete: 'restrict',
});
Orders.belongsTo(Drivers, {
  foreignKey: "driver_id"
});

Users.hasMany(Orders, {
  foreignKey: "user_id",
  onDelete: 'restrict',
});
Orders.belongsTo(Users, {
  foreignKey: "user_id"
});

Coupons.hasMany(Orders, {
  foreignKey: "coupon_id",
  onDelete: 'restrict',
});
Orders.belongsTo(Coupons, {
  foreignKey: "coupon_id"
});

module.exports = Orders;