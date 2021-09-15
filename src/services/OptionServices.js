const { OptionRepository } = require(appRoot + "/repositories");

class OptionService {
    async getAllOption() {
        try {
            return await OptionRepository.getAll();
        } catch (e) {
            throw e;
        }
    }

    async getOptionById(id) {
        try {
            return await OptionRepository.getById(id);
        }
        catch (e) {
            throw e;
        }
    }

    async checkExistInFood(id) {
        try {
            return await OptionRepository.checkExist(id);
        } catch (e) {
            throw e;
        }
    }

    async addOption(newOption) {
        try {
            return await OptionRepository.store(newOption);
        } catch (e) {
            throw e;
        }
    }

    async updateOption(updateOption, id) {
        try {
            return await OptionRepository.update(updateOption, id);
        } catch (e) {
            throw e;
        }
    }

    async deleteOption(id) {
        try {
            return await OptionRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async index() { }
}

module.exports = new OptionService();
