const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const { Orders, Stores, Users, Drivers, Coupons, OrdersItems, Foods } = require(appRoot + "/models");
const { pagination } = require(appRoot + "/helpers");

class OrderRepository {
    async index(q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true, required: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
            });
        }
        catch {
            return null;
        }
    }

    async showByFindingDriver(q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true, required: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
                where: { status: "finding_driver" },
                order: [['createdAt', 'desc']]
            });
        }
        catch {
            return null;
        }
    }

    async show(id) {
        try {
            const foundOrder = await Orders.findOne({
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
                where: { id }
            });

            return foundOrder;
        } catch {
            return null;
        }
    }

    async showByStore(storeId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                where: { store_id: storeId },
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
            });
        } catch {
            return null;
        }
    }

    async showByDriver(driverId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                where: { driver_id: driverId },
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
            });
        } catch {
            return null;
        }
    }

    async showByUser(userId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                where: { user_id: userId },
                include: [
                    { model: Stores, attributes: ['name', 'latitude', 'longitude'], required: true },
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true,
                        include: [{
                            model: Foods, attributes: ['name']
                        }]
                    },
                ],
            });
        } catch {
            return null;
        }
    }

    async store(newOrder) {
        try {
            const res = await Orders.create({ ...newOrder, id: uuidv4() });
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateOrder, id) {
        try {
            const res = await Orders.update({
                ...updateOrder
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
            const res = await Orders.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new OrderRepository();