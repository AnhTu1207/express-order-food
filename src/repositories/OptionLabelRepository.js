const { v4: uuidv4 } = require("uuid");

const { OptionsLabels } = require(appRoot + "/models");

class OptionLabelRepository {
    async getAll() {
        try {
            const allLabel = await OptionsLabels.findAll();
            return allLabel
        }
        catch {
            return null;
        }
    }

    async getById(id) {
        try {
            const foundLabel = await OptionsLabels.findOne({
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
                where: { id }
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