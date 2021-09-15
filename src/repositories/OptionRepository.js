const { v4: uuidv4 } = require("uuid");

const { Options, Foods } = require(appRoot + "/models");

class OptionRepository {
    async getAll() {
        try {
            const allOptions = await Options.findAll();
            return allOptions
        }
        catch {
            return null;
        }
    }

    async getById(id) {
        try {
            const foundOption = await Options.findOne({
                where: { id }
            });
            return foundOption;
        } catch {
            return null;
        }
    }

    async checkExist(id) {
        try {
            const foundFood = await Foods.findOne({
                where: { id }
            });
            if (foundFood !== null) {
                return true
            }
            return false
        } catch (e) {
            throw e;
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
                where: { id }
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