// const { Sequelize } = require("sequelize");

// const { sequelizeConfig } = require(appRoot + "/config");
// const Foods = require("./FoodModel");

// const OptionsLabels = sequelizeConfig.define("options_label", {
//     id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         primaryKey: true,
//     },
//     food_id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// }, {
//     freezeTableName: true
// });

// Foods.hasMany(OptionsLabels, {
//     foreignKey: "food_id"
// });
// OptionsLabels.belongsTo(Foods, {
//     foreignKey: "food_id"
// });

// module.exports = OptionsLabels;