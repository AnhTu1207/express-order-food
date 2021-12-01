// const { Sequelize } = require("sequelize");

// const { sequelizeConfig } = require(appRoot + "/config");
// const Foods = require("./FoodModel");
// const OptionsLabels = require("./OptionLabelModel");

// const Options = sequelizeConfig.define("options", {
//     id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         primaryKey: true,
//     },
//     label_id: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     price: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//     }
// });

// OptionsLabels.hasMany(Options, {
//     foreignKey: "label_id"
// });
// Options.belongsTo(OptionsLabels, {
//     foreignKey: "label_id"
// });

// module.exports = Options;