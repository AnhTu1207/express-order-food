const { check, body } = require("express-validator");

module.exports = [
    check("email").not().isEmpty().trim().escape(),
    check("email").isEmail(),
    body().custom(body => {
        const keys = ['email'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
