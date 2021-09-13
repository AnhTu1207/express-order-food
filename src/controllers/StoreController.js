const { validationResult } = require("express-validator");

const { StoreService } = require(appRoot + "/services");
const { utility } = require(appRoot + "/helpers");
const { map } = require("lodash");

class StoreController {

    async index(req, res) {
        try {
            const allStore = await StoreService.getAllStore();
            // Placeholder for include foods created by store
            return res.status(200).json({ status: 200, data: allStore });
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
            const foundStore = await StoreService.getStoreById(id);
            if (foundStore === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: foundStore });
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
            const id = req.params.id
            const foundStore = await StoreService.getStoreById(id)
            if (foundStore === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                const result = await StoreService.updateStore(req.body, id)
                if (result) {
                    const data = await StoreService.getStoreById(id)
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
            const id = req.params.id
            const deleteStore = await StoreService.getStoreById(id)
            if (deleteStore === null) {
                return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
            }
            else {
                await StoreService.deleteStore(id)
                // Removing image
                if (deleteStore.avatar) {
                    await utility.removeImage(utility.getPath(deleteStore.avatar))
                }
                return res.status(200).json({ status: 200, data: deleteStore });
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
        try {
            const id = req.params.id
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
                const url = "http://" + req.headers.host + utility.getUrl(req.file.destination, req.file.filename)
                const result = await StoreService.updateImage(url, id)
                if (result) {
                    return res.status(201).json({ status: 201, data: url });
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

    async edit(req, res) {
        try {
            const id = req.params.id
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
                // Removing old image before editing
                await utility.removeImage(utility.getPath(foundStore.avatar))

                const url = "http://" + req.headers.host + utility.getUrl(req.file.destination, req.file.filename)
                const result = await StoreService.updateImage(url, id)
                if (result) {
                    return res.status(201).json({ status: 201, data: url });
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
