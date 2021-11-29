const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const { Stores } = require(appRoot + "/models");
const { jwt, pagination } = require(appRoot + "/helpers");

class StoreRepository {
    async index(q) {
        try {
            return await pagination(Stores, +q.page || 1, {
                attributes: { exclude: ["password"] },
            });
        }
        catch {
            return null;
        }
    }

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

    async store(newStore) {
        try {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            newStore.password = bcrypt.hashSync(newStore.password, salt);
            const res = await Stores.create({ ...newStore, id: uuidv4() });
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
            return res;
        } catch (e) {
            throw e
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