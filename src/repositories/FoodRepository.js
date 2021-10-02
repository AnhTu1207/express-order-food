const { v4: uuidv4 } = require("uuid");

const { Foods, Categories, Stores, Options, OptionsLabels } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");
class FoodRepository {
    async index() {
        try {
            return await pagination(Foods, +q.page || 1, {
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar'], required: true }
                ]
            });
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundFood = await Foods.findOne({
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar'], required: true },
                    {
                        model: OptionsLabels, attributes: ['id', 'name'], include: [{
                            model: Options, required: true, attributes: ['id', 'name', 'price']
                        }]
                    }
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