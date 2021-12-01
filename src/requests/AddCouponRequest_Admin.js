const { check, body } = require("express-validator");

module.exports = [
    check("name").not().isEmpty().trim().escape().isLength({ max: 40 }).withMessage("The name can't exceed 40 characters"),
    check("code").not().isEmpty().trim().escape().isLength({ max: 10 }).withMessage("The code can't exceed 10 characters").matches(/^\S*$/).withMessage("The code can't have space between"),
    check("discount").not().isEmpty().trim().escape().isNumeric().isLength({ max: 7 }).withMessage("The discount can't exceed 7 numbers"),
    check("expiry_day").matches(/^\d{4}-\d{2}-\d{2}$/).withMessage("You must select correct expiry date (YYYY-MM-DD)").isAfter().withMessage("You can't not select the day before"),
    body().custom(body => {
        const keys = ['name', 'code', 'discount', 'expiry_day', 'store_id'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Some extra parameters are sent')
];
