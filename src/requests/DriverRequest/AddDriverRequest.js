const { check, body } = require("express-validator");

module.exports = [
  check("email").not().isEmpty().trim().escape(),
  check("email").isEmail().trim().escape(),
  check("password").not().isEmpty().trim().escape(),
  check("fullname").not().isEmpty().trim().escape(),
  check("phone").isMobilePhone().trim().escape(),
  body()
    .custom((body) => {
      const keys = ["email", "password", "fullname", "phone"];
      return Object.keys(body).every((key) => keys.includes(key));
    })
    .withMessage("Some extra parameters are sent"),
];
