const { OrderItemRepository } = require(appRoot + "/repositories");

class OrderItemService {
    async store(newOrderItem) {
        try {
            return await OrderItemRepository.store(newOrderItem);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OrderItemService();
