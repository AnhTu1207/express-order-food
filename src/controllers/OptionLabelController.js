const { validationResult } = require("express-validator");

const { FoodService, OptionLabelService } = require(appRoot + "/services");
const { map } = require("lodash");

class OptionLabelController {

    async index(req, res) {
        try {
            const allLabel = await OptionLabelService.getAllLabel();
            return res.status(200).json({ status: 200, data: allLabel });
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
            const foundOption = await OptionLabelService.getLabelById(id);
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

    async update(req, res) {
        try {
            const id = req.params.id;
            const foundOption = await OptionLabelService.getLabelById(id)
            if (foundOption === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                const result = await OptionLabelService.updateLabel(req.body, id)
                if (result) {
                    const data = await OptionLabelService.getLabelById(id)
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
            const deleteLabel = await OptionLabelService.getLabelById(id)
            if (deleteLabel === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                await OptionLabelService.deleteLabel(id)
                return res.status(200).json({ status: 200, data: deleteLabel });
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

module.exports = new OptionLabelController();
