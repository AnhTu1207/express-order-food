const { check, body } = require("express-validator");

module.exports = [
    check("oldpassword").not().isEmpty().escape().trim(),
    check("password").not().isEmpty().escape().trim(),
    body().custom(body => {
        const keys = ['oldpassword', 'password'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
