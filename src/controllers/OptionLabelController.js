const { validationResult } = require("express-validator");

const { FoodService, OptionLabelService } = require(appRoot + "/services");
const { map } = require("lodash");

class OptionLabelController {

    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const result = await FoodService.checkExist(req.body.food_id);
            if (!result) {
                return res.status(400).json({ status: 400, message: "Invalid food_id or record does not exist" });
            }
            const newLabel = await OptionLabelService.addLabel(req.body);
            return res.status(201).json(newLabel);
        } catch (e) {
            if (e.errors && e.errors.length) {
                return res
                    .status(400)
                    .json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }
}

module.exports = new OptionLabelController();
