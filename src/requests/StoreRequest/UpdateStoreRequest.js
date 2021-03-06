const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().escape().trim(),
    check("address").not().isEmpty().escape().trim().isLength({ min: 20 }),
    check("latitude").not().isEmpty().escape().trim(),
    check("longitude").not().isEmpty().escape().trim(),
    check("district").not().isEmpty().escape().trim(),
    check("email").not().isEmpty().escape().trim(),
    check("phone").not().isEmpty().trim().escape(),
    check("status").not().isEmpty().escape().trim(),
    body().custom(body => {
        const keys = ['name', 'address', 'latitude', 'longitude', 'status', 'email', "open_time", "close_time", 'phone', 'district'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
