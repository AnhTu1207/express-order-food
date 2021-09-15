const { CategoryRepository } = require(appRoot + "/repositories");

class CategoryService {
    async getAllCategory() {
        try {
            return await CategoryRepository.getAll();
        } catch (e) {
            throw e;
        }
    }

    async getCategoryById(id) {
        try {
            return await CategoryRepository.getById(id);
        }
        catch (e) {
            throw e;
        }
    }

    async checkExist(id) {
        try {
            return await CategoryRepository.checkExist(id);
        } catch (e) {
            throw e;
        }
    }

    async checkExistInFood(category_id) {
        try {
            return await CategoryRepository.checkExistInFood(category_id);
        } catch (e) {
            throw e;
        }
    }

    async addCategory(newCategory) {
        try {
            return await CategoryRepository.store(newCategory);
        } catch (e) {
            throw e;
        }
    }

    async updateCategory(updateCategory, id) {
        try {
            return await CategoryRepository.update(updateCategory, id);
        } catch (e) {
            throw e;
        }
    }

    async deleteCategory(id) {
        try {
            return await CategoryRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async index() { }
}

module.exports = new CategoryService();
