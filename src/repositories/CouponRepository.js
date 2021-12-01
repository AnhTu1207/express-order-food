const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const { Coupons } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");

class CouponRepository {
    async index(q) {
        try {
            return await pagination(Coupons, +q.page || 1, q.limit, {});
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundCoupon = await Coupons.findOne({
                where: { id }
            });

            return foundCoupon;
        } catch {
            return null;
        }
    }

    async showByStore(storeId, q) {
        try {
            return await pagination(Coupons, +q.page || 1, q.limit, {
                where: { store_id: storeId }
            });
        }
        catch {
            return null;
        }
    }

    async search(q) {
        try {
            return await pagination(Coupons, +q.page || 1, q.limit, {
                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: '%' + q.search + '%' } },
                        { code: { [Op.iLike]: '%' + q.search + '%' } }
                    ]
                },
            });
        }
        catch {
            return null;
        }
    }

    async store(newCoupon) {
        try {
            const res = await Coupons.create({ ...newCoupon, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateCoupon, id) {
        try {
            const res = await Coupons.update({
                ...updateCoupon
            }, {
                where: { id },
                returning: true
            })
            return res;
        } catch (e) {
            throw e;
        }
    }

    async delete(id) {
        try {
            const res = await Coupons.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new CouponRepository();