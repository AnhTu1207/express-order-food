const { check, oneOf, body } = require("express-validator");

module.exports = [
  oneOf([
    [
      check("username").not().isEmpty().escape().trim(),
      check("password").not().isEmpty().escape().trim(),
      body().custom(body => {
        const keys = ['username', 'password'];
        return Object.keys(body).every(key => keys.includes(key));
      }).withMessage('Some extra parameters are sent')
    ],
    [
      check("email").not().isEmpty().escape().trim(),
      check("password").not().isEmpty().escape().trim(),
      body().custom(body => {
        const keys = ['email', 'password'];
        return Object.keys(body).every(key => keys.includes(key));
      }).withMessage('Some extra parameters are sent')
    ],
  ]),
];
