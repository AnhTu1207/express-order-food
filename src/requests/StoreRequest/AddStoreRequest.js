const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape(),
    check("address").not().isEmpty().trim(),
    check("latitude").not().isEmpty().trim().escape().matches(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,7})?))$/).withMessage("Latitude is incorrect format"),
    check("longitude").not().isEmpty().trim().escape().matches(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,7})?))$/).withMessage("Longitude is incorrect format"),
    check("email").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("phone").not().isEmpty().trim().escape().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g).withMessage("Your phone number is not in the correct format"),
    check("email").isEmail(),
    body().custom(body => {
        const keys = ['name', 'address', 'latitude', 'longitude', 'email', 'password', 'phone'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
