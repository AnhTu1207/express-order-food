const { v4: uuidv4 } = require("uuid");

const { Categories } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");

class CategoryRepository {
    async index(q) {
        try {
            return await pagination(Categories, +q.page || 1, q.limit, {});
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundCategory = await Categories.findOne({
                where: { id }
            });

            return foundCategory;
        } catch {
            return null;
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
                where: { id },
                returning: true
            })
            return res;
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            const res = await Categories.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new CategoryRepository();