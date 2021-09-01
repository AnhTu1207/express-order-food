const { check } = require("express-validator");

module.exports = [
    check("name").not().isEmpty(),
];
