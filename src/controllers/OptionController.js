const { validationResult } = require("express-validator");

const { FoodService, OptionLabelService, OptionService } = require(appRoot + "/services");
const { map } = require("lodash");

class OptionController {

    async index(req, res) {
        try {
            const allOption = await OptionService.getAllOption();
            return res.status(200).json({ status: 200, data: allOption });
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const foundOption = await OptionService.getOptionById(id);
            if (foundOption === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: foundOption });
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const result = await FoodService.checkExist(req.body.food_id) && await OptionLabelService.checkExist(req.body.label_id);
            if (!result) {
                return res.status(400).json({ status: 400, message: "Invalid food_id or label_id nor record does not exist" });
            }
            const newOption = await OptionService.addOption(req.body);
            return res.status(201).json(newOption);
        } catch (e) {
            if (e.errors && e.errors.length) {
                return res
                    .status(400)
                    .json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const foundOption = await OptionService.getOptionById(id)
            if (foundOption === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                const result = await OptionService.updateOption(req.body, id)
                if (result) {
                    const data = await OptionService.getOptionById(id)
                    return res.status(200).json({ status: 200, data: data });
                }
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res
                    .status(400)
                    .json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deleteOption = await OptionService.getOptionById(id)
            if (deleteOption === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                await OptionService.deleteOption(id)
                return res.status(200).json({ status: 200, data: deleteOption });
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res
                    .status(400)
                    .json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }
}

module.exports = new OptionController();
