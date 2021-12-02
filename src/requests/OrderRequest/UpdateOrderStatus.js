const { check, body, oneOf } = require("express-validator");

module.exports = [
    oneOf([
        [
            check("status").not().isEmpty().trim().escape().equals('delivering').withMessage("Invalid enum type"),
        ],
        [
            check("status").not().isEmpty().trim().escape().equals('done').withMessage("Invalid enum type"),
        ],
    ]),
    body().custom(body => {
        const keys = ["status"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
