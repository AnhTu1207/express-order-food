const { OptionLabelRepository } = require(appRoot + "/repositories");

class OptionLabelService {
    async getAllLabel() {
        try {
            return await OptionLabelRepository.getAll();
        } catch (e) {
            throw e;
        }
    }

    async getLabelById(id) {
        try {
            return await OptionLabelRepository.getById(id);
        }
        catch (e) {
            throw e;
        }
    }

    async checkExist(id) {
        try {
            return await OptionLabelRepository.checkExist(id);
        }
        catch (e) {
            throw e;
        }
    }

    async addLabel(newLabel) {
        try {
            return await OptionLabelRepository.store(newLabel);
        } catch (e) {
            throw e;
        }
    }

    async updateLabel(updateLabel, id) {
        try {
            return await OptionLabelRepository.update(updateLabel, id);
        } catch (e) {
            throw e;
        }
    }

    async deleteLabel(id) {
        try {
            return await OptionLabelRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async index() { }
}

module.exports = new OptionLabelService();
