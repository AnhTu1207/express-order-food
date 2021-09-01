const { validationResult } = require("express-validator");

const { CategoryService } = require(appRoot + "/services");
const { map } = require("lodash");

class CategoryController {

    async index(req, res) {
        return res.status(404).json({ status: 404, message: "Invalid URL" });
    }

    async getAllCategory(req, res) {
        try {
            const allCategory = await CategoryService.getAllCategory();
            return res.status(200).json({ status: 200, message: "Your request has been successfully", data: allCategory });
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async getCategoryById(req, res) {
        try {
            const foundCategory = await CategoryService.getCategoryById(req.params.id);
            if (foundCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, message: "Your request has been successfully", data: foundCategory });
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
            const foundCategory = await CategoryService.getCategoryById(req.params.id)
            if (foundCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                await CategoryService.updateCategory(req.body, req.params.id)
                return res.status(200).json({ status: 200, message: "Your request has been successfully", data: req.body });
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
            const deleteCategory = await CategoryService.getCategoryById(req.params.id)
            if (deleteCategory === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                await CategoryService.deleteCategory(req.params.id)
                return res.status(200).json({ status: 200, message: "Your request has been successfully" });
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
