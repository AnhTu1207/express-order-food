const { CouponRepository } = require(appRoot + "/repositories");

class CouponService {
    async index(q) {
        try {
            return await CouponRepository.index(q);
        } catch (e) {
            throw e;
        }
    }

    async show(id) {
        try {
            return await CouponRepository.show(id);
        }
        catch (e) {
            throw e;
        }
    }

    async showByStore(storeId, q) {
        try {
            return await CouponRepository.showByStore(storeId, q);
        }
        catch (e) {
            throw e;
        }
    }

    async search(q) {
        try {
            return await CouponRepository.search(q);
        }
        catch (e) {
            throw e;
        }
    }

    async store(newCoupon) {
        try {
            return await CouponRepository.store(newCoupon);
        } catch (e) {
            throw e;
        }
    }

    async update(updateCoupon, id) {
        try {
            return await CouponRepository.update(updateCoupon, id);
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            return await CouponRepository.delete(id);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new CouponService();
