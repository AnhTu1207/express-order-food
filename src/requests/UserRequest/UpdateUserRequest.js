const { check, body } = require("express-validator");

module.exports = [
    check("email").not().isEmpty().escape().trim(),
    check("name").not().isEmpty().escape().trim(),
    check("phone").not().isEmpty().trim().escape(),
    check("address").not().isEmpty().trim().isLength({ min: 20 }),
    check("email").isEmail(),
    body().custom(body => {
        const keys = ['name', 'email', "phone", "address"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
