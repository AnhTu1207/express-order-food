const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Foods = require("./FoodModel");
const Orders = require("./OrderModel");

const Orders_item = sequelizeConfig.define(
  "orders_item", {
    order_id: {
      type: Sequelize.STRING,
      references: {
        model: Orders,
        key: "id",
      },
      allowNull: false,
    },
    food_id: {
      type: Sequelize.STRING,
      references: {
        model: Foods,
        key: "id",
      },
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
Orders_item.removeAttribute("id");

Orders.hasMany(Orders_item, {
  foreignKey: "order_id"
});
Orders_item.belongsTo(Orders, {
  foreignKey: "order_id"
});

Foods.hasMany(Orders_item, {
  foreignKey: "food_id"
});
Orders_item.belongsTo(Foods, {
  foreignKey: "food_id"
});

module.exports = Orders_item;