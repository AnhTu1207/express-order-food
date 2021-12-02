const { check, body } = require("express-validator");

module.exports = [
    check("user_id").not().isEmpty().trim().escape(),
    check("store_id").exists().withMessage("Missing").isArray().withMessage('Store_id is not an array')
        .custom((value) => {
            if (value.length === 0) throw new Error("Array can't not be empty");
            return true;
        }),
    check("total").not().isEmpty().trim().escape(),
    check("address").not().isEmpty().trim(),
    check("payment_option").not().isEmpty().trim().escape(),
    check("items").exists().withMessage("Missing").isArray().withMessage('Items is not an array'),
    check("items.*.food_id").not().isEmpty().trim().escape(),
    check("items.*.qty").not().isEmpty().trim().escape(),
    check("items.*.price").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ["store_id", "user_id", "address", "total", "payment_option", "coupon_id", "items"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
