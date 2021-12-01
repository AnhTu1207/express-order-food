const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Foods = require("./FoodModel");
const Orders = require("./OrderModel");

const OrdersItems = sequelizeConfig.define(
  "orders_item", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  order_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  food_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true
}
);

Orders.hasMany(OrdersItems, {
  foreignKey: "order_id"
});
OrdersItems.belongsTo(Orders, {
  foreignKey: "order_id"
});

Foods.hasMany(OrdersItems, {
  foreignKey: "food_id"
});
OrdersItems.belongsTo(Foods, {
  foreignKey: "food_id"
});

module.exports = OrdersItems;