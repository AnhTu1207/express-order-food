const { check, body } = require("express-validator");

module.exports = [
    check("driver_id").not().isEmpty().trim().escape(),
    check("status").not().isEmpty().trim().escape().equals('cooking_foods').withMessage("Invalid enum type"),
    body().custom(body => {
        const keys = ["driver_id", "status"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
