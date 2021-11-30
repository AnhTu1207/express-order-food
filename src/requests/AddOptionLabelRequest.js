const { check, body } = require("express-validator");

module.exports = [
    check("food_id").not().isEmpty().trim().escape(),
    check("name").not().isEmpty().trim().escape(),
    body().custom(body => {
        const keys = ['name', 'food_id'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')

];
