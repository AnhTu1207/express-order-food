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

    async showTopStore(q) {
        try {
            return await StoreRepository.showTopStore(q);
        } catch (e) {
            throw e;
        }
    }

    async showOrderByPresent(storeId, q) {
        try {
            return await StoreRepository.showOrderByPresent(storeId, q);
        } catch (e) {
            throw e;
        }
    }

    async showOrderByWeek(storeId, q) {
        try {
            return await StoreRepository.showOrderByWeek(storeId, q);
        } catch (e) {
            throw e;
        }
    }

    async showOrderByMonth(storeId, q) {
        try {
            return await StoreRepository.showOrderByMonth(storeId, q);
        } catch (e) {
            throw e;
        }
    }

    async showOrderBetWeen(storeId, q) {
        try {
            return await StoreRepository.showOrderBetWeen(storeId, q);
        } catch (e) {
            throw e;
        }
    }

    async countOrderByWeek(storeId) {
        try {
            return await StoreRepository.countOrderByWeek(storeId);
        } catch (e) {
            throw e;
        }
    }

    async countOrderByMonth(storeId) {
        try {
            return await StoreRepository.countOrderByMonth(storeId);
        } catch (e) {
            throw e;
        }
    }

    async countOrderByYear(storeId) {
        try {
            return await StoreRepository.countOrderByYear(storeId);
        } catch (e) {
            throw e;
        }
    }

    async sumOrderByWeek(storeId) {
        try {
            return await StoreRepository.sumOrderByWeek(storeId);
        } catch (e) {
            throw e;
        }
    }

    async sumOrderByMonth(storeId) {
        try {
            return await StoreRepository.sumOrderByMonth(storeId);
        } catch (e) {
            throw e;
        }
    }

    async sumOrderByYear(storeId) {
        try {
            return await StoreRepository.sumOrderByYear(storeId);
        } catch (e) {
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

    async updateRating(value, id) {
        try {
            return await StoreRepository.updateRating(value, id);
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
