const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim(),
    check("price").not().isEmpty().trim().escape(),
    check("store_id").not().isEmpty().trim().escape(),
    check("category_id").not().isEmpty().trim().escape(),
    check("status").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['name', 'price', 'detail', 'store_id', 'category_id', 'status'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
