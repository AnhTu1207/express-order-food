const { OrdersItems } = require(appRoot + "/models");

class OrderItemRepository {
    async store(newOrder) {
        try {
            const res = await OrdersItems.create({ ...newOrder });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OrderItemRepository();