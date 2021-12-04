const { StoreRepository } = require(appRoot + "/repositories");

class StoreService {
    async index(q) {
        try {
            return await StoreRepository.index(q);
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

    async showByEmail(body) {
        try {
            return await StoreRepository.showByEmail(body);
        } catch (e) {
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

    async updatePassword(updateStore, id) {
        try {
            return await StoreRepository.updatePassword(updateStore, id);
        } catch (e) {
            throw e;
        }
    }

    async forgotPassword(randomPassword, id) {
        try {
            return await StoreRepository.forgotPassword(randomPassword, id);
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
