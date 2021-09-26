const { check, body } = require("express-validator");

module.exports = [
  check("username").not().isEmpty().trim().escape(),
  check("email").not().isEmpty().trim().escape(),
  check("password").not().isEmpty().trim().escape(),
  check("email").isEmail(),
  body().custom(body => {
    const keys = ['username', 'email', 'password', 'fb_id'];
    return Object.keys(body).every(key => keys.includes(key));
  }).withMessage('Some extra parameters are sent')

];
