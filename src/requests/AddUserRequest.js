const { check } = require("express-validator");

module.exports = [
  check("username").not().isEmpty().trim().escape(),
  check("email").not().isEmpty().trim().escape(),
  check("password").not().isEmpty().trim().escape(),
  check("email").isEmail(),
];
