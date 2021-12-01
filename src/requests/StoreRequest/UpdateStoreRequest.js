const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().escape().trim(),
    check("address").not().isEmpty().escape().trim(),
    check("latitude").not().isEmpty().escape().trim(),
    check("longitude").not().isEmpty().escape().trim(),
    check("email").not().isEmpty().escape().trim(),
    check("phone").not().isEmpty().trim().escape().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g).withMessage("Your phone number is not in the correct format"),
    check("status").not().isEmpty().escape().trim(),
    body().custom(body => {
        const keys = ['name', 'address', 'latitude', 'longitude', 'status', 'email', "open_time", "close_time", 'phone'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
