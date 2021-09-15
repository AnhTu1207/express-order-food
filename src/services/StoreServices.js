const { StoreRepository } = require(appRoot + "/repositories");

class StoreService {
    async getAllStore() {
        try {
            return await StoreRepository.getAll();
        } catch (e) {
            throw e;
        }
    }

    async getStoreById(id) {
        try {
            return await StoreRepository.getById(id);
        }
        catch (e) {
            throw e;
        }
    }

    async checkExist(id) {
        try {
            return await StoreRepository.checkExist(id);
        } catch (e) {
            throw e;
        }
    }

    async addStore(newStore) {
        try {
            return await StoreRepository.store(newStore);
        } catch (e) {
            throw e;
        }
    }

    async updateStore(updateStore, id) {
        try {
            return await StoreRepository.update(updateStore, id);
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

    async deleteStore(id) {
        try {
            return await StoreRepository.delete(id);
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

    async index() { }
}

module.exports = new StoreService();
