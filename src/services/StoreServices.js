const { StoreRepository } = require(appRoot + "/repositories");

class StoreService {
    async index() {
        try {
            return await StoreRepository.index();
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await StoreRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newStore) {
        try {
            return await StoreRepository.store(newStore);
        } catch (e) {
            throw e;
        }
    }

    async update(updateStore, id) {
        try {
            return await StoreRepository.update(updateStore, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await StoreRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }

    async updateImage(filename, id) {
        try {
            return await StoreRepository.updateImage(filename, id);
        } catch (e) {
            throw e;
        }
    }

    async login(infoLogin) {
        try {
            return await StoreRepository.login(infoLogin);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new StoreService();
