const { validationResult } = require("express-validator");

const { FoodService, OptionLabelService } = require(appRoot + "/services");
const { map } = require("lodash");

class OptionLabelController {

    async index(req, res) {
        try {
            const data = await OptionLabelService.index(req.query);
            return res.status(200).json(data);
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const foundOption = await OptionLabelService.show(id);
            if (foundOption === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
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
            const newLabel = await OptionLabelService.store(req.body);
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const id = req.params.id;
            const foundOption = await OptionLabelService.show(id)
            if (foundOption === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                const data = await OptionLabelService.update(req.body, id)
                return res.status(200).json({ status: 200, data: data[1][0] });
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
            const deleteLabel = await OptionLabelService.show(id)
            if (deleteLabel === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                await OptionLabelService.delete(id)
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
