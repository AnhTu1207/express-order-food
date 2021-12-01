const { v4: uuidv4 } = require("uuid");

const { Options } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");

class OptionRepository {
    async index(q) {
        try {
            return await pagination(Options, +q.page || 1, {});
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundOption = await Options.findOne({
                where: { id }
            });
            return foundOption;
        } catch {
            return null;
        }
    }

    async store(newOption) {
        try {
            const res = await Options.create({ ...newOption, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateOption, id) {
        try {
            const res = await Options.update({
                ...updateOption
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
            const res = await Options.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }
}

module.exports = new OptionRepository();