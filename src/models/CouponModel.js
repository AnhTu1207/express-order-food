const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Stores = require("./StoreModel");

const Coupons = sequelizeConfig.define("coupons", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    store_id: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

Stores.hasMany(Coupons, {
    foreignKey: "store_id"
});
Coupons.belongsTo(Stores, {
    foreignKey: "store_id"
});

module.exports = Coupons;