const { check } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape(),
    check("address").not().isEmpty().trim().escape(),
    check("latitude").not().isEmpty().trim().escape(),
    check("longitude").not().isEmpty().trim().escape(),
    check("open").not().isEmpty().trim().escape(),
    check("email").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail(),
];
