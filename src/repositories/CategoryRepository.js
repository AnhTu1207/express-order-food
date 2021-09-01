const { v4: uuidv4 } = require("uuid");

const { Categories } = require(appRoot + "/models");

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

    async store(newCategory) {
        const res = await Categories.create({ ...newCategory, id: uuidv4() });
        return res.dataValues;
    }

    async update(updateCategory, id) {
        const res = await Categories.update({
            name: updateCategory.name,
            updateAt: new Date().toISOString()
        }, {
            where: { id }
        })
        return res;
    }

    async delete(id) {
        const res = await Categories.destroy({
            where: { id }
        })
        return res;
    }
}

module.exports = new CategoryRepository();