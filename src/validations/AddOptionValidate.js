const { check } = require("express-validator");

module.exports = [
    check("food_id").not().isEmpty().trim().escape(),
    check("name").not().isEmpty().trim().escape(),
    check("price").not().isEmpty().trim().escape(),
];
