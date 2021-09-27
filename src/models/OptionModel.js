const { Sequelize } = require("sequelize");

const { sequelizeConfig } = require(appRoot + "/config");
const Foods = require("./FoodModel");
const OptionsLabels = require("./OptionLabelModel");

const Options = sequelizeConfig.define("options", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    food_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    label_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Foods.hasMany(Options, {
    foreignKey: "food_id"
});
Options.belongsTo(Foods, {
    foreignKey: "food_id"
});

OptionsLabels.hasMany(Options, {
    foreignKey: "label_id"
});
Options.belongsTo(OptionsLabels, {
    foreignKey: "label_id"
});

module.exports = Options;