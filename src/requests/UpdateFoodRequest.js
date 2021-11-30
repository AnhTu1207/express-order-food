const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape(),
    check("price").not().isEmpty().trim().escape(),
    check("category_id").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['name', 'price', 'detail', 'category_id'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
