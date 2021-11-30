const { v4: uuidv4 } = require("uuid");

const { OptionsLabels, Options } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");

class OptionLabelRepository {
    async index(q) {
        try {
            return await pagination(OptionsLabels, +q.page || 1, {
                include: [
                    { model: Options, attributes: ['name', 'price'] }
                ]
            });
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundLabel = await OptionsLabels.findOne({
                include: [
                    { model: Options, attributes: ['name', 'price'] }
                ],
                where: { id }
            });
            return foundLabel;
        } catch {
            return null;
        }
    }

    async store(newLabel) {
        try {
            const res = await OptionsLabels.create({ ...newLabel, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateLabel, id) {
        try {
            const res = await OptionsLabels.update({
                ...updateLabel
            }, {
                where: { id },
                returning: true
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async delete(id) {
        try {
            const res = await OptionsLabels.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }
}

module.exports = new OptionLabelRepository();