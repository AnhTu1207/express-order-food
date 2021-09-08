const { validationResult } = require("express-validator");

const { StoreService } = require(appRoot + "/services");
const { utility } = require(appRoot + "/helpers");
const { map } = require("lodash");

class StoreController {

    async index(req, res) {
        return res.status(404).json({ status: 404, message: "Invalid URL" });
    }

    async getAllStore(req, res) {
        try {
            const allStore = await StoreService.getAllStore();
            // Placeholder for include foods created by store
            return res.status(200).json({ status: 200, message: "Your request has been successfully", data: allStore });
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async getStoreById(req, res) {
        try {
            const foundStore = await StoreService.getStoreById(req.params.id);
            if (foundStore === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, message: "Your request has been successfully", data: foundStore });
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
            const newCategory = await StoreService.addStore(req.body);
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

    async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const storeLogin = await StoreService.login(req.body);
            if (!storeLogin) {
                return res.status(400).json({ status: 400, message: "Wrong email or password" });
            }
            return res.status(200).json({ data: storeLogin });
        } catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, e => e.message) });
            }
            res.status(500).send();
        }
    }

    async upload(req, res) {
        const id = req.params.id
        try {
            const foundStore = await StoreService.getStoreById(req.params.id);
            if (foundStore === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            const currUpload = utility.uploadImage('stores');
            currUpload(req, res, async function (err) {
                if (err) {
                    return res.status(400).json({ status: 400, message: err.message });
                }
                if (!req.file) {
                    return res.status(400).json({ status: 400, message: "No image received" });
                }
                const result = await StoreService.updateImage(req.file.filename, id)
                if (result) {
                    return res.status(200).json({ status: 200, message: "Uploade Successful", file: req.file.path });
                }
                res.status(400).json({ status: 400, message: "Error during uploading" })
            });

        } catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }
}

module.exports = new StoreController();
