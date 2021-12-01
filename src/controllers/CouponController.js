const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

const { CouponService } = require(appRoot + "/services");
const { map } = require("lodash");

class CouponController {

    async index(req, res) {
        try {
            const data = await CouponService.index(req.query);
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
            const foundCoupon = await CouponService.show(req.params.id);
            if (foundCoupon === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: foundCoupon });
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async showByStore(req, res) {
        try {
            const id = req.params.id;
            const data = await CouponService.showByStore(id, req.query);
            return res.status(200).json(data);
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async search(req, res) {
        try {
            const data = await CouponService.search(req.query);
            return res.status(200).json(data);
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
            const newCoupon = await CouponService.store(req.body);
            return res.status(201).json(newCoupon);
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
            const foundCoupon = await CouponService.show(req.params.id)
            if (foundCoupon === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                const data = await CouponService.update(req.body, req.params.id)
                return res.status(200).json({ status: 200, data: data[1][0] });
            }
        }
        catch (e) {
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

    async delete(req, res) {
        try {
            const deleteCoupon = await CouponService.show(req.params.id)
            if (deleteCoupon === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                await CouponService.delete(req.params.id)
                return res.status(200).json({ status: 200, data: deleteCoupon });
            }
        }
        catch (e) {
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
}

module.exports = new CouponController();
