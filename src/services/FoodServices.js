const { FoodRepository } = require(appRoot + "/repositories");

class FoodService {
    async getAllFood() {
        try {
            return await FoodRepository.getAll();
        } catch (e) {
            throw e;
        }
    }

    async getFoodById(id) {
        try {
            return await FoodRepository.getById(id);
        }
        catch (e) {
            throw e;
        }
    }

    async getFoodByCategoryId(id) {
        try {
            return await FoodRepository.getByCategory(id);
        }
        catch (e) {
            throw e;
        }
    }

    async addFood(newFood) {
        try {
            return await FoodRepository.store(newFood);
        } catch (e) {
            throw e;
        }
    }

    async updateFood(updateFood, id) {
        try {
            return await FoodRepository.update(updateFood, id);
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

    async deleteFood(id) {
        try {
            return await FoodRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async index() { }
}

module.exports = new FoodService();
