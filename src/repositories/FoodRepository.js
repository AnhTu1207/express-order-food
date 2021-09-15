const { v4: uuidv4 } = require("uuid");

const { Foods, Categories, Stores, Options } = require(appRoot + "/models");

class FoodRepository {
    async getAll() {
        try {
            const allFoods = await Foods.findAll({
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar'], required: true }
                ]
            });
            return allFoods
        }
        catch {
            return null;
        }
    }

    async getById(id) {
        try {
            const foundFood = await Foods.findOne({
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar'], required: true },
                    { model: Options, attributes: ['id', 'name', 'price'] }
                ],
                where: { id }
            });
            return foundFood;
        } catch {
            return null;
        }
    }

    async getByCategory(id) {
        try {
            const foundFood = await Categories.findOne({
                include: [
                    {
                        model: Foods, include: [
                            { model: Categories, attributes: ['name'], required: true },
                        ]
                    },
                ],
                where: { id }
            });
            return foundFood;
        } catch {
            return null;
        }
    }

    async store(newFood) {
        try {
            const res = await Foods.create({ ...newFood, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateFood, id) {
        try {
            const res = await Foods.update({
                ...updateFood
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
            const res = await Foods.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async updateImage(filename, id) {
        try {
            const res = await Foods.update({
                avatar: filename,
            }, {
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }
}

module.exports = new FoodRepository();