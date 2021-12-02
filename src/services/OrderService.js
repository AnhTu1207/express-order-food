const { OrderRepository } = require(appRoot + "/repositories");

class OrderService {
    async index(q) {
        try {
            return await OrderRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async showByFindingDriver(q) {
        try {
            return await OrderRepository.showByFindingDriver(q);
        }
        catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await OrderRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }


    async showByStore(storeId, q) {
        try {
            return await OrderRepository.showByStore(storeId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async showByDriver(driverId, q) {
        try {
            return await OrderRepository.showByDriver(driverId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async showByUser(userId, q) {
        try {
            return await OrderRepository.showByUser(userId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newOrder) {
        try {
            return await OrderRepository.store(newOrder);
        } catch (e) {
            throw e;
        }
    }

    async update(updateOrder, id) {
        try {
            return await OrderRepository.update(updateOrder, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await OrderRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OrderService();
