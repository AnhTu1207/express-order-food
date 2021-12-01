const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim(),
    body().custom(body => {
        const keys = ['name'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
