const { check, body } = require("express-validator");

module.exports = [
  check("username").not().isEmpty().trim().escape(),
  check("email").not().isEmpty().trim().escape(),
  check("password").not().isEmpty().trim().escape(),
  check("name").not().isEmpty().trim().escape(),
  check("phone").not().isEmpty().trim().escape(),
  check("address").not().isEmpty().trim().isLength({ min: 20 }),
  check("email").isEmail(),
  body().custom(body => {
    const keys = ['username', 'email', 'password', 'name', 'phone', 'address'];
    return Object.keys(body).every(key => keys.includes(key));
  }).withMessage('Some extra parameters are sent')
];
