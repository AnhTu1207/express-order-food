const { check, body, oneOf } = require("express-validator");

module.exports = [
  oneOf([
    [
      check("email").not().isEmpty().escape().trim(),
      check("email").isEmail(),
      check("fullname").not().isEmpty().escape().trim(),
      check("phone").not().isEmpty().escape().trim(),
      check("phone").isMobilePhone(),
    ],
    [check("password").not().isEmpty().escape().trim()],
  ]),
  body()
    .custom((body) => {
      const keys = ["email", "fullname", "phone", "password"];
      return Object.keys(body).every((key) => keys.includes(key));
    })
    .withMessage("Some extra parameters are sent"),
];
