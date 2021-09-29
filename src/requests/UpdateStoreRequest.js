const { check, body, oneOf } = require("express-validator");

module.exports = [
    oneOf([
        [
            check("name").not().isEmpty().escape().trim(),
            check("address").not().isEmpty().escape().trim(),
            check("latitude").not().isEmpty().escape().trim(),
            check("longitude").not().isEmpty().escape().trim(),
            check("email").not().isEmpty().escape().trim(),
            check("open").not().isEmpty().escape().trim(),
        ],
        [
            check("password").not().isEmpty().escape().trim(),
        ],
    ]),
    body().custom(body => {
        const keys = ['name', 'address', 'latitude', 'longitude', 'open', 'email', 'password'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
