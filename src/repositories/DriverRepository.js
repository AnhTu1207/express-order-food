const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const { Drivers } = require(appRoot + "/models");
const { pagination, jwt } = require(appRoot + "/helpers");
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

  async store(newDriver) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      newDriver.password = bcrypt.hashSync(newDriver.password, salt);
      const res = await Drivers.create({ ...newDriver, id: uuidv4() });
      delete res.dataValues.password;
      return {
        ...res.dataValues,
      }
        ;
    } catch (e) {
      throw e;
    }
  }

  async update(updateDriver, id) {
    try {
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

  async updatePassword(updateDriver, id) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      const foundDriver = await Drivers.findOne({
        where: { id }
      })

      const matchPassword = await bcrypt.compare(
        updateDriver.oldpassword,
        foundDriver.dataValues.password
      );
      if (!matchPassword) {
        return null;
      }
      updateDriver.password = bcrypt.hashSync(updateDriver.password, salt);
      const res = await Drivers.update({
        password: updateDriver.password
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
      const res = await Drivers.update({
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
      let foundDriver = null;
      if (infoLogin.email) {
        foundDriver = await Drivers.findOne({
          where: { email: infoLogin.email.trim() },
        });
      }
      if (!foundDriver) return null;

      const matchPassword = await bcrypt.compare(
        infoLogin.password,
        foundDriver.dataValues.password
      );
      if (!matchPassword) return null;
      foundDriver.dataValues.role = "driver"
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
