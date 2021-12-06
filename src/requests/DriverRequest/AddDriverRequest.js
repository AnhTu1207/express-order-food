const { check, body } = require("express-validator");

module.exports = [
  check("email").not().isEmpty().trim().escape(),
  check("email").isEmail(),
  check("password").not().isEmpty().trim().escape(),
  check("fullname").not().isEmpty().trim().escape(),
  check("address").not().isEmpty().trim().isLength({ min: 20 }),
  check("bike_number").not().isEmpty().trim().escape(),
  check("phone").not().isEmpty().trim().escape(),
  body()
    .custom((body) => {
      const keys = ["email", "password", "fullname", "phone", "address", "bike_number"];
      return Object.keys(body).every((key) => keys.includes(key));
    })
    .withMessage("Some extra parameters are sent"),
];
