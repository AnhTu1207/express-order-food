const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const { Stores, Foods } = require(appRoot + "/models");
const { jwt } = require(appRoot + "/helpers");

class StoreRepository {
    async getAll() {
        try {
            const allStores = await Stores.findAll();
            return allStores
        }
        catch {
            return null;
        }
    }

    async getById(id) {
        try {
            const foundStore = await Stores.findOne({
                where: { id }
            });
            return foundStore;
        } catch {
            return null;
        }
    }

    async checkUnique(id) {
        try {
            const foundStore = await Stores.findOne({
                where: { id }
            });
            if (foundStore !== null) {
                return true
            }
            return false
        } catch (e) {
            throw e;
        }
    }

    async store(newStore) {
        try {
            const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
            newStore.password = bcrypt.hashSync(newStore.password, salt);
            const res = await Stores.create({ ...newStore, id: uuidv4() });
            delete res.dataValues.password;
            return res.dataValues;
        } catch (e) {
            throw e;
        }
    }

    async update(updateStore, id) {
        try {
            if (updateStore.password) {
                const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
                updateStore.password = bcrypt.hashSync(updateStore.password, salt);
            }
            const res = await Stores.update({
                ...updateStore
            }, {
                where: { id }
            })
            return res;
        } catch (e) {
            throw e
        }
    }

    async updateImage(filename, id) {
        try {
            const res = await Stores.update({
                avatar: filename,
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