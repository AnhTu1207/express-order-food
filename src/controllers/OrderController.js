const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

const { OrderService, OrderItemService, StoreService } = require(appRoot + "/services");
const { map } = require("lodash");
class OrderController {

    async index(req, res) {
        try {
            const data = await OrderService.index(req.query);
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
            const foundOrder = await OrderService.show(id);
            if (foundOrder === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: foundOrder });
            }
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async showByProcessingOrderStore(req, res) {
        try {
            const id = req.params.id;
            const data = await OrderService.showByProcessingOrderStore(req.query, id);
            return res.status(200).json(data);
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async showByFindindDriver(req, res) {
        try {
            const data = await OrderService.showByFindingDriver(req.query);
            return res.status(200).json(data);
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
            const data = await OrderService.showByStore(id, req.query);
            return res.status(200).json(data);
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async showByDriver(req, res) {
        try {
            const id = req.params.id;
            const data = await OrderService.showByDriver(id, req.query);
            return res.status(200).json(data);
        }
        catch (e) {
            if (e.errors && e.errors.length) {
                return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
            }
            res.status(500).send();
        }
    }

    async showByUser(req, res) {
        try {
            const id = req.params.id;
            const data = await OrderService.showByUser(id, req.query);
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
            const { store_id, user_id, total, coupon_id, payment_option, address, shipper_fee, items } = req.body
            const newOrder = { store_id, user_id, total, payment_option, address, coupon_id, shipper_fee }
            await store_id.map(async (e) => {
                let data = await StoreService.show(e);
                if (!data) {
                    return res.status(400).json({ status: 400, message: "Invalid store ID" });
                }
            })
            const storeOrder = await OrderService.store(newOrder)
            if (storeOrder) {
                const data = await Promise.all(items.map(async (item) => {
                    try {
                        return await OrderItemService.store({ order_id: storeOrder.id, ...item })
                    }
                    catch (e) {
                        if (e instanceof Sequelize.ForeignKeyConstraintError) {
                            return res.status(400).json({ status: 400, message: e.parent.detail });
                        }
                    }
                }),
                    await OrderService.update({ status: "finding_driver" }, storeOrder.id));
                return res.status(201).json({ ...storeOrder, items: data })
            }
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
            const foundOrder = await OrderService.show(id)
            if (foundOrder === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            if (foundOrder.driver_id !== null) {
                return res.status(400).json({ status: 400, message: "Someone already picked up the order" });
            }
            const data = await OrderService.update(req.body, id)
            return res.status(200).json({ status: 200, data: data[1][0] });
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

    async updateStatus(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const id = req.params.id;
            const foundOrder = await OrderService.show(id)
            if (foundOrder === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            const data = await OrderService.update(req.body, id)
            return res.status(200).json({ status: 200, data: data[1][0] });
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
            const id = req.params.id;
            const deleteOrder = await OrderService.show(id)
            if (deleteOrder === null) {
                return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
            }
            else {
                return res.status(200).json({ status: 200, data: deleteOrder });
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

module.exports = new OrderController();
