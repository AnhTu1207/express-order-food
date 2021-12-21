const { check, body } = require("express-validator");

module.exports = [
    check("is_open").not().isEmpty().trim(),
    body().custom(body => {
        const keys = ['is_open'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
