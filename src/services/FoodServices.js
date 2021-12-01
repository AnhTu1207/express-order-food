const { FoodRepository } = require(appRoot + "/repositories");

class FoodService {
    async index(q) {
        try {
            return await FoodRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await FoodRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async showByCategory(categoryId, q) {
        try {
            return await FoodRepository.showByCategory(categoryId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async showByStore(storeId, q) {
        try {
            return await FoodRepository.showByStore(storeId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async search(q) {
        try {
            return await FoodRepository.search(q);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newFood) {
        try {
            return await FoodRepository.store(newFood);
        } catch (e) {
            throw e;
        }
    }

    async update(updateFood, id) {
        try {
            return await FoodRepository.update(updateFood, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await FoodRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async updateImage(filename, id) {
        try {
            return await FoodRepository.updateImage(filename, id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new FoodService();
