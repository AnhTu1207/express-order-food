const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

const { OptionService } = require(appRoot + "/services");
const { map } = require("lodash");

class OptionController {

    async index(req, res) {
        try {
            const data = await OptionService.index(req.query);
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
            const foundOption = await OptionService.show(id);
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
            const newOption = await OptionService.store(req.body);
            return res.status(201).json(newOption);
        } catch (e) {
            if (e instanceof Sequelize.ForeignKeyConstraintError) {
                return res.status(400).json({ status: 400, message: e.parent.detail });
            }
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
            const foundOption = await OptionService.show(id)
            if (foundOption === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                const data = await OptionService.update(req.body, id)
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
            const deleteOption = await OptionService.show(id)
            if (deleteOption === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                await OptionService.delete(id)
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
