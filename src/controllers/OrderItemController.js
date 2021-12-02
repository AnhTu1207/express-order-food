const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

const { OrderItemService } = require(appRoot + "/services");
const { map } = require("lodash");

class OrderItemController {

    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors });
        }
        try {
            const newOrderItem = await OrderItemService.store(req.body);
            return res.status(201).json(newOrderItem);
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
}

module.exports = new OrderItemController();
