const { check, oneOf } = require("express-validator");

module.exports = [
  oneOf([
    [
      check("username").not().isEmpty().escape().trim(),
      check("password").not().isEmpty().escape().trim(),
    ],
    [
      check("email").not().isEmpty().escape().trim(),
      check("password").not().isEmpty().escape().trim(),
    ],
  ]),
];
