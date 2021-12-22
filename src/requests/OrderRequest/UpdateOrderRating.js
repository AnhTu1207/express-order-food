const { check, body } = require("express-validator");

module.exports = [
    check("driver_rating").not().isEmpty().trim().escape().isInt({ min: 0, max: 5 }).withMessage("Rating must be a number between 0 and 5"),
    check("store_rating").not().isEmpty().trim().escape().isInt({ min: 0, max: 5 }).withMessage("Rating must be a number between 0 and 5"),
    body().custom(body => {
        const keys = ["driver_rating", "store_rating"];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
