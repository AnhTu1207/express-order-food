const { validationResult } = require("express-validator");

const { CategoryService } = require(appRoot + "/services");
const { map } = require("lodash");

class CategoryController {

    async index(req, res) {
        try {
            const data = await CategoryService.index(req.query);
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
            const foundCategory = await CategoryService.show(req.params.id);
            if (foundCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: foundCategory });
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
            const newCategory = await CategoryService.addCategory(req.body);
            return res.status(201).json(newCategory);
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
            const foundCategory = await CategoryService.show(req.params.id)
            if (foundCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                const data = await CategoryService.updateCategory(req.body, req.params.id)
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
            const deleteCategory = await CategoryService.show(req.params.id)
            if (deleteCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                await CategoryService.deleteCategory(req.params.id)
                return res.status(200).json({ status: 200, data: deleteCategory });
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

module.exports = new CategoryController();
