const { OptionLabelRepository } = require(appRoot + "/repositories");

class OptionLabelService {
    async index(q) {
        try {
            return await OptionLabelRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await OptionLabelRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newLabel) {
        try {
            return await OptionLabelRepository.store(newLabel);
        } catch (e) {
            throw e;
        }
    }

    async update(updateLabel, id) {
        try {
            return await OptionLabelRepository.update(updateLabel, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await OptionLabelRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OptionLabelService();
