const { CategoryRepository } = require(appRoot + "/repositories");

class CategoryService {
    async index(q) {
        try {
            return await CategoryRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await CategoryRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newCategory) {
        try {
            return await CategoryRepository.store(newCategory);
        } catch (e) {
            throw e;
        }
    }

    async update(updateCategory, id) {
        try {
            return await CategoryRepository.update(updateCategory, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await CategoryRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new CategoryService();
