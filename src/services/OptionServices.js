const { OptionRepository } = require(appRoot + "/repositories");

class OptionService {
    async index(q) {
        try {
            return await OptionRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await OptionRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newOption) {
        try {
            return await OptionRepository.store(newOption);
        } catch (e) {
            throw e;
        }
    }

    async update(updateOption, id) {
        try {
            return await OptionRepository.update(updateOption, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await OptionRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OptionService();
