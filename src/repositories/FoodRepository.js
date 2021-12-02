const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const { Foods, Categories, Stores } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");
class FoodRepository {
    async index(q) {
        try {
            return await pagination(Foods, +q.page || 1, q.limit, {
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar', 'status', 'open_time', 'close_time', 'is_open'], required: true }
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
                    { model: Stores, attributes: ['name', 'avatar', 'status', 'open_time', 'close_time', 'is_open'], required: true },
                ],
                where: { id }
            });
            return foundFood;
        } catch {
            return null;
        }
    }

    async showByCategory(categoryId, q) {
        try {
            return await pagination(Foods, +q.page || 1, q.limit, {
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar', 'status', 'open_time', 'close_time', 'is_open'], required: true }
                ],
                where: { category_id: categoryId }
            });
        }
        catch {
            return null;
        }
    }

    async showByStore(storeId, q) {
        try {
            return await pagination(Foods, +q.page || 1, q.limit, {
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar', 'status', 'open_time', 'close_time', 'is_open'], required: true }
                ],
                where: { store_id: storeId }
            });
        }
        catch {
            return null;
        }
    }

    async search(q) {
        try {
            return await pagination(Foods, +q.page || 1, q.limit, {
                include: [
                    { model: Categories, attributes: ['name'], required: true },
                    { model: Stores, attributes: ['name', 'avatar', 'status', 'open_time', 'close_time', 'is_open'], required: true }
                ],
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: '%' + q.search + '%' } },
                        { '$store.name$': { [Op.iLike]: '%' + q.search + '%' } },
                    ]
                },
            });
        }
        catch {
            return null;
        }
    }

    async store(newFood) {
        try {
            const res = await Foods.create({ ...newFood, id: uuidv4(), avatar_placeholder: "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png" });
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
                where: { id },
                returning: true,
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