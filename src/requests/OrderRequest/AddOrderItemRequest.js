const { check, body } = require("express-validator");

module.exports = [
    check("order_id").not().isEmpty().trim().escape(),
    check("food_id").not().isEmpty().trim().escape(),
    check("qty").not().isEmpty().trim().escape(),
    check("price").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['order_id', "food_id", "qty", "price"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
