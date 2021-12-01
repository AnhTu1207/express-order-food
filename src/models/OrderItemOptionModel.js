// const { Sequelize } = require("sequelize");

// const { sequelizeConfig } = require(appRoot + "/config");
// const OrdersItems = require("./OrderItemModel");
// const Option = require("./OptionModel");

// const OrdersItemsOptions = sequelizeConfig.define(
//     "orders_item_option", {
//     order_item_id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     option_id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
// }, {
//     freezeTableName: true
// });

// OrdersItemsOptions.removeAttribute('id');

// OrdersItems.hasMany(OrdersItemsOptions, {
//     foreignKey: "order_item_id"
// });
// OrdersItemsOptions.belongsTo(OrdersItems, {
//     foreignKey: "order_item_id"
// });

// Option.hasMany(OrdersItemsOptions, {
//     foreignKey: "option_id"
// });
// OrdersItemsOptions.belongsTo(Option, {
//     foreignKey: "option_id"
// });

// module.exports = OrdersItemsOptions;