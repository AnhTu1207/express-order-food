const { Drivers } = require(appRoot + "/models");
const { pagination, jwt } = require(appRoot + "/helpers");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);

class DriverRepository {
  async index(q) {
    try {
      return await pagination(Drivers, +q.page || 1, {
        attributes: { exclude: ["password"] },
      });
    } catch {
      return null;
    }
  }

  async show(id) {
    try {
      const foundDriver = await Drivers.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });
      return foundDriver;
    } catch {
      return null;
    }
  }

  async driver(newDriver) {
    try {
      newDriver.password = bcrypt.hashSync(newDriver.password, salt);
      const res = await Drivers.create({ ...newDriver, id: uuidv4() });
      delete res.dataValues.password;
      return res.dataValues;
    } catch (e) {
      throw e;
    }
  }

  async update(updateDriver, id) {
    try {
      if (updateDriver.password) {
        updateDriver.password = bcrypt.hashSync(updateDriver.password, salt);
      }
      const res = await Drivers.update(
        {
          ...updateDriver,
        },
        {
          where: { id },
          returning: true,
        }
      );
      return res;
    } catch (e) {
      throw e;
    }
  }

  async delete(id) {
    try {
      const res = await Drivers.destroy({
        where: { id },
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  async login(infoLogin) {
    try {
      let fondDriver = null;
      if (infoLogin.email) {
        fondDriver = await Drivers.findOne({
          where: { email: infoLogin.email.trim() },
        });
      }
      if (!foundDriver) return null;

      const matchPassword = await bcrypt.compare(
        infoLogin.password,
        foundDriver.dataValues.password
      );
      if (!matchPassword) return null;

      delete foundDriver.dataValues.password;
      return {
        ...foundDriver.dataValues,
        accessToken: jwt.sign(foundDriver),
      };
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new DriverRepository();
