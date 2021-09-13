const { v4: uuidv4 } = require("uuid");

const { Categories, Foods } = require(appRoot + "/models");

class CategoryRepository {
    async getAll() {
        try {
            const allCategories = await Categories.findAll();
            return allCategories
        }
        catch {
            return null;
        }
    }

    async getById(id) {
        try {
            const foundCategory = await Categories.findOne({
                where: { id }
            });
            return foundCategory;
        } catch {
            return null;
        }
    }

    async checkUnique(id) {
        try {
            const foundCategory = await Categories.findOne({
                where: { id }
            });
            if (foundCategory !== null) {
                return true
            }
            return false
        } catch (e) {
            throw e;
        }
    }

    async checkExist(category_id) {
        try {
            const foundCategory = await Foods.findOne({
                where: { category_id }
            });
            if (foundCategory !== null) {
                return true
            }
            return false
        } catch (e) {
            throw e;
        }
    }

    async store(newCategory) {
        try {
            const res = await Categories.create({ ...newCategory, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateCategory, id) {
        try {
            const res = await Categories.update({
                ...updateCategory
            }, {
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async delete(id) {
        try {
            const res = await Categories.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }
}

module.exports = new CategoryRepository();