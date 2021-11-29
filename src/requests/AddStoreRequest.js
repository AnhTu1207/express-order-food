const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape(),
    check("address").not().isEmpty().trim().escape(),
    check("latitude").not().isEmpty().trim().escape(),
    check("longitude").not().isEmpty().trim().escape(),
    check("email").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail(),
    body().custom(body => {
        const keys = ['name', 'address', 'latitude', 'longitude', 'email', 'password'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
