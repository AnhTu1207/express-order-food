const { check, body } = require("express-validator");

module.exports = [
    check("email").not().isEmpty().escape().trim(),
    check("name").not().isEmpty().escape().trim(),
    check("phone").not().isEmpty().trim().escape().matches(/((09|03|07|08|05)+([0-9]{8})\b)/g).withMessage("Your phone number is not in the correct format"),
    check("address").not().isEmpty().trim(),
    check("email").isEmail(),
    body().custom(body => {
        const keys = ['name', 'email', "phone", "address"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
