const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const moment = require('moment');

const { Stores, Orders, OrdersItems, Users, Drivers, Coupons, Foods } = require(appRoot + "/models");
const { sequelizeConfig } = require(appRoot + "/config");
const { jwt, pagination } = require(appRoot + "/helpers");

class StoreRepository {
    async index(q) {
        try {
            return await pagination(Stores, +q.page || 1, q.limit, {
                attributes: { exclude: ["password"] },
            });
        }
        catch {
            return null;
        }
    }

    // async index(q) {
    //     try {
    //         const size = parseInt(q.limit) || 50;
    //         const currentPage = +q.page || 1;
    //         const data = await sequelizeConfig.query(`SELECT drivers.id, drivers.email, drivers.fullname, drivers.phone, drivers.address, drivers.bike_number, drivers.status, drivers.avatar, drivers.total_rating, drivers.is_verified, drivers.is_open, "drivers"."createdAt", "drivers"."updatedAt", COUNT(orders.driver_id) AS total_count, coalesce(SUM(orders.shipper_fee),0) AS total_sum FROM drivers LEFT OUTER JOIN orders ON orders.driver_id = drivers.id WHERE orders.status = 'done' GROUP BY drivers.id LIMIT ? OFFSET ?`,
    //             {
    //                 replacements: [size, (size * (currentPage - 1))],
    //                 type: sequelizeConfig.QueryTypes.SELECT,
    //             }
    //         );
    //         return {
    //             size: size,
    //             currentPage: currentPage,
    //             data: data
    //         }
    //     } catch {
    //         return null;
    //     }
    // }

    async show(id) {
        try {
            const foundStore = await Stores.findOne({
                where: { id },
                attributes: { exclude: ["password"] },
            });
            return foundStore;
        } catch {
            return null;
        }
    }

    async showByEmail(body) {
        try {
            const foundStore = await Stores.findOne({
                where: body,
                attributes: { exclude: ["password"] },
            });

            return foundStore;
        } catch {
            return null;
        }
    }

    async showOrderByPresent(storeId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
                    { model: Users, attributes: ['name', 'address', 'phone'], required: true },
                    { model: Drivers, attributes: ['fullname', 'bike_number', 'avatar'], required: false },
                    { model: Coupons, attributes: ['code'], required: false },
                    {
                        model: OrdersItems, separate: true,
                        include: [{
                            model: Foods, attributes: ['name', 'store_id']
                        }]
                    },
                ],
                where: {
                    [Op.and]:
                        [
                            { store_id: { [Op.contains]: [storeId] } },
                            { status: 'done' },
                            { createdAt: { [Op.gt]: moment().format('YYYY-MM-DD 00:00') } },
                            { createdAt: { [Op.lte]: moment().format('YYYY-MM-DD 23:59') } },
                        ]
                }
            });
        } catch {
            return null;
        }
    }

    async showOrderByWeek(storeId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
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
                where: {
                    [Op.and]:
                        [
                            { store_id: { [Op.contains]: [storeId] } },
                            { status: 'done' },
                            { createdAt: { [Op.gte]: moment().subtract(7, 'days').toDate() } }
                        ]
                }
            });
        } catch {
            return null;
        }
    }

    async showOrderByMonth(storeId, q) {
        try {
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
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
                where: {
                    [Op.and]:
                        [
                            { store_id: { [Op.contains]: [storeId] } },
                            { status: 'done' },
                            { createdAt: { [Op.gte]: moment().subtract(30, 'days').toDate() } }
                        ]
                }
            });
        } catch {
            return null;
        }
    }

    async showOrderBetWeen(storeId, q) {
        try {
            const startDate = moment(q.startDate).format('YYYY-MM-DD') || moment().format();
            const endDate = moment(q.endDate).format('YYYY-MM-DD 23:59') || moment().format('YYYY-MM-DD 23:59');
            return await pagination(Orders, +q.page || 1, q.limit, {
                include: [
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
                where: {
                    [Op.and]:
                        [
                            { store_id: { [Op.contains]: [storeId] } },
                            { status: 'done' },
                            { createdAt: { [Op.between]: [startDate, endDate] } }
                        ]
                }
            });
        } catch {
            return null;
        }
    }

    async countOrderByWeek(storeId) {
        try {
            let regWeek = [];
            let day = 1;
            while (day < 8) {
                const currDay = await Orders.findAndCountAll({
                    attributes: ['id'],
                    where: {
                        [Op.and]:
                            [
                                { store_id: { [Op.contains]: [storeId] } },
                                { status: 'done' },
                                { createdAt: { [Op.gte]: moment().subtract(day - 1, 'days').startOf('days').toDate() } },
                                { createdAt: { [Op.lte]: moment().subtract(day - 1, 'days').endOf('days').toDate() } }
                            ]
                    },
                })
                regWeek.push({ currDay, 'name': moment().subtract(day - 1, 'days').format(moment.HTML5_FMT.DATE) });
                day++;
            }
            return regWeek;
        } catch {
            return null;
        }
    }

    async countOrderByMonth(storeId) {
        try {
            let regWeek = [];
            let day = 1;
            while (day < 31) {
                const currDay = await Orders.findAndCountAll({
                    attributes: ['id'],
                    where: {
                        [Op.and]:
                            [
                                { store_id: { [Op.contains]: [storeId] } },
                                { status: 'done' },
                                { createdAt: { [Op.gte]: moment().subtract(day - 1, 'days').startOf('days').toDate() } },
                                { createdAt: { [Op.lte]: moment().subtract(day - 1, 'days').endOf('days').toDate() } }
                            ]
                    },
                })
                regWeek.push({ currDay, 'name': moment().subtract(day - 1, 'days').format(moment.HTML5_FMT.DATE) });
                day++;
            }
            return regWeek;
        } catch {
            return null;
        }
    }

    async countOrderByYear(storeId) {
        try {
            let regMonth = [];
            let month = 1;
            while (month < 13) {
                const currMonth = await Orders.findAndCountAll({
                    attributes: ['id'],
                    where: {
                        [Op.and]:
                            [
                                { store_id: { [Op.contains]: [storeId] } },
                                { status: 'done' },
                                { createdAt: { [Op.gte]: moment("0101", "MMDD").add(month - 1, 'months').toDate() } },
                                { createdAt: { [Op.lte]: moment("0101", "MMDD").add(month, 'months').toDate() } },
                            ]
                    },
                })
                regMonth.push({ currMonth, name: moment("0101", "MMDD").add(month - 1, 'months').format('MMMM') });
                month++;
            }
            return regMonth;
        } catch {
            return null;
        }
    }

    async sumOrderByWeek(storeId) {
        try {
            let regWeek = [];
            let day = 1;
            while (day < 8) {
                let startDate = moment().subtract(day - 1, 'days').startOf('days').toDate();
                let endDate = moment().subtract(day - 1, 'days').endOf('days').toDate();
                const data = await sequelizeConfig.query(`SELECT SUM(orders_item.price) AS total_sum FROM orders INNER JOIN orders_item ON orders.id = orders_item.order_id INNER JOIN foods ON orders_item.food_id = foods.id WHERE foods.store_id = ? AND orders.status = ? AND "orders"."createdAt" BETWEEN ? AND ?`,
                    {
                        replacements: [storeId, 'done', startDate, endDate],
                        type: sequelizeConfig.QueryTypes.SELECT,
                    }
                );
                const currDay = data[0]
                if (currDay.total_sum === null) {
                    currDay.total_sum = 0
                }
                regWeek.push({ currDay, 'name': moment().subtract(day - 1, 'days').format(moment.HTML5_FMT.DATE) });
                day++;
            }
            return regWeek;
        } catch {
            return null;
        }
    }

    async sumOrderByMonth(storeId) {
        try {
            let regWeek = [];
            let day = 1;
            while (day < 31) {
                let startDate = moment().subtract(day - 1, 'days').startOf('days').toDate();
                let endDate = moment().subtract(day - 1, 'days').endOf('days').toDate();
                const data = await sequelizeConfig.query(`SELECT SUM(orders_item.price) AS total_sum FROM orders INNER JOIN orders_item ON orders.id = orders_item.order_id INNER JOIN foods ON orders_item.food_id = foods.id WHERE foods.store_id = ? AND orders.status = ? AND "orders"."createdAt" BETWEEN ? AND ?`,
                    {
                        replacements: [storeId, 'done', startDate, endDate],
                        type: sequelizeConfig.QueryTypes.SELECT,
                    }
                );
                const currDay = data[0]
                if (currDay.total_sum === null) {
                    currDay.total_sum = 0
                }
                regWeek.push({ currDay, 'name': moment().subtract(day - 1, 'days').format(moment.HTML5_FMT.DATE) });
                day++;
            }
            return regWeek;
        } catch {
            return null;
        }
    }

    async sumOrderByYear(storeId) {
        try {
            let regMonth = [];
            let month = 1;
            while (month < 13) {
                let startDate = moment("0101", "MMDD").add(month - 1, 'months').toDate();
                let endDate = moment("0101", "MMDD").add(month, 'months').toDate();
                const data = await sequelizeConfig.query(`SELECT SUM(orders_item.price) AS total_sum FROM orders INNER JOIN orders_item ON orders.id = orders_item.order_id INNER JOIN foods ON orders_item.food_id = foods.id WHERE foods.store_id = ? AND orders.status = ? AND "orders"."createdAt" BETWEEN ? AND ?`,
                    {
                        replacements: [storeId, 'done', startDate, endDate],
                        type: sequelizeConfig.QueryTypes.SELECT,
                    }
                );
                const currMonth = data[0]
                if (currMonth.total_sum === null) {
                    currMonth.total_sum = 0
                }
                regMonth.push({ currMonth, 'name': moment("0101", "MMDD").add(month - 1, 'months').format('MMMM') });
                month++;
            }
            return regMonth;
        } catch {
            return null;
        }
    }

    async store(newStore) {
        try {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            newStore.password = bcrypt.hashSync(newStore.password, salt);
            const res = await Stores.create({ ...newStore, id: uuidv4(), avatar_placeholder: "https://guru-food-app.s3.ap-southeast-1.amazonaws.com/placeholder_food.png" });
            delete res.dataValues.password;
            return {
                ...res.dataValues,
            }
                ;
        } catch (e) {
            throw e;
        }
    }

    async update(updateStore, id) {
        try {
            const res = await Stores.update({
                ...updateStore
            }, {
                where: { id },
                returning: true
            })
            delete res[1][0].dataValues.password
            return res;
        } catch (e) {
            throw e
        }
    }

    async updateRating(value, id) {
        try {
            const res = await Stores.increment(
                {
                    total_rating: +parseInt(value)
                },
                {
                    where: { id },
                }
            );
            return res;
        } catch (e) {
            throw e;
        }
    }

    async updatePassword(updateStore, id) {
        try {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            const foundStore = await Stores.findOne({
                where: { id }
            })

            const matchPassword = await bcrypt.compare(
                updateStore.oldpassword,
                foundStore.dataValues.password
            );
            if (!matchPassword) {
                return null;
            }
            updateStore.password = bcrypt.hashSync(updateStore.password, salt);
            const res = await Stores.update({
                password: updateStore.password
            }, {
                where: { id },
                returning: true
            })
            return res;
        }
        catch (e) {
            throw e
        }
    }

    async forgotPassword(randomPassword, id) {
        try {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            randomPassword = bcrypt.hashSync(randomPassword, salt);

            const res = await Stores.update({
                password: randomPassword
            }, {
                where: { id },
                attributes: { exclude: ["password"] },
                returning: true
            })
            return res;
        }
        catch (e) {
            throw e
        }
    }

    async updateImage(filename, id) {
        try {
            const res = await Stores.update({
                avatar: filename,
                updateAt: new Date().toISOString()
            }, {
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async delete(id) {
        try {
            const res = await Stores.destroy({
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async login(infoLogin) {
        try {
            let foundStore = null;
            if (infoLogin.email) {
                foundStore = await Stores.findOne({
                    where: { email: infoLogin.email.trim() },
                });
            }
            if (!foundStore) {
                return null;
            }

            const matchPassword = await bcrypt.compare(
                infoLogin.password,
                foundStore.dataValues.password
            );
            if (!matchPassword) {
                return null;
            }
            foundStore.dataValues.role = "store";
            delete foundStore.dataValues.password;
            return {
                ...foundStore.dataValues,
                accessToken: jwt.sign(foundStore),
            };
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new StoreRepository();