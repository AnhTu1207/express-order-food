const { check, body } = require("express-validator");

module.exports = [
  check("username").not().isEmpty().trim().escape(),
  check("email").not().isEmpty().trim().escape(),
  check("password").not().isEmpty().trim().escape(),
  check("name").not().isEmpty().trim().escape(),
  check("phone").not().isEmpty().trim().escape().matches(/((09|03|07|08|05)+([0-9]{8})\b)/g).withMessage("Your phone number is not in the correct format"),
  check("address").not().isEmpty().trim().escape(),
  check("email").isEmail(),
  body().custom(body => {
    const keys = ['username', 'email', 'password', 'name', 'phone', 'address'];
    return Object.keys(body).every(key => keys.includes(key));
  }).withMessage('Some extra parameters are sent')
];
