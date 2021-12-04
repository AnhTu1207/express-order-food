const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Drivers = require("./DriverModel");
const Orders = require("./OrderModel");

const HistoryOrders = sequelizeConfig.define("history_orders", {
    order_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    driver_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM,
        values: [
            "done",
        ],
    },
});

HistoryOrders.removeAttribute('id');

Drivers.hasMany(HistoryOrders, {
    foreignKey: "driver_id",
    onDelete: 'restrict',
});
HistoryOrders.belongsTo(Drivers, {
    foreignKey: "driver_id"
});

Orders.hasMany(HistoryOrders, {
    foreignKey: "order_id",
    onDelete: 'restrict',
});
HistoryOrders.belongsTo(Orders, {
    foreignKey: "order_id"
});

module.exports = HistoryOrders;