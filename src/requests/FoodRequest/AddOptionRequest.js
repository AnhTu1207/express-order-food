const { check, body } = require("express-validator");

module.exports = [
    check("label_id").not().isEmpty().trim().escape(),
    check("name").not().isEmpty().trim().escape(),
    check("price").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['name', 'food_id', 'label_id', 'price'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
