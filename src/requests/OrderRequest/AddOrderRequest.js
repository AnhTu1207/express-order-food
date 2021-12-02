const { check, body } = require("express-validator");

module.exports = [
    check("store_id").not().isEmpty().trim().escape(),
    check("user_id").not().isEmpty().trim().escape(),
    check("total").not().isEmpty().trim().escape(),
    check("payment_option").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['store_id', "user_id", "total", "payment_option", "coupon_id"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
