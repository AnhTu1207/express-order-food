const { check, body } = require("express-validator");

module.exports = [
  check("email").not().isEmpty().escape().trim(),
  check("email").isEmail(),
  check("fullname").not().isEmpty().escape().trim(),
  check("address").not().isEmpty().trim().escape().isLength({ min: 20 }),
  check("bike_number").not().isEmpty().trim().escape(),
  check("phone").not().isEmpty().trim().escape(),
  check("status").not().isEmpty().trim().escape(),
  body()
    .custom((body) => {
      const keys = ["email", "fullname", "phone", "bike_number", "address", "status"];
      return Object.keys(body).every((key) => keys.includes(key));
    })
    .withMessage("Some extra parameters are sent"),
];
