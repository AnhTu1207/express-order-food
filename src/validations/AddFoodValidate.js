const { check } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape(),
    check("price").not().isEmpty().trim().escape(),
    check("store_id").not().isEmpty().trim().escape(),
    check("category_id").not().isEmpty().trim().escape(),
];
