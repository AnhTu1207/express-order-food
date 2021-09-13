const { validationResult } = require("express-validator");

const { CategoryService } = require(appRoot + "/services");
const { map } = require("lodash");

class CategoryController {

    async index(req, res) {
        try {
            const allCategory = await CategoryService.getAllCategory();
            return res.status(200).json({ status: 200, data: allCategory });
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
            const foundCategory = await CategoryService.getCategoryById(id);
            if (foundCategory === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
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
            return res.status(201).json({ code: 201, data: newCategory });
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
            const foundCategory = await CategoryService.getCategoryById(id)
            if (foundCategory === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                const result = await CategoryService.updateCategory(req.body, id)
                if (result) {
                    const data = await CategoryService.getCategoryById(id)
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
            const deleteCategory = await CategoryService.getCategoryById(id)
            if (deleteCategory === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                const result = await CategoryService.checkExistInFood(id);
                if (result) {
                    return res.status(400).json({ status: 400, message: "You must remove all the foods related to this category first" })
                }
                await CategoryService.deleteCategory(id)
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
