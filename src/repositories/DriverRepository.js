const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const moment = require('moment');

const { Drivers, Stores, Orders, OrdersItems, Users, Coupons, Foods } = require(appRoot + "/models");
const { sequelizeConfig } = require(appRoot + "/config");
const { pagination, jwt } = require(appRoot + "/helpers");
class DriverRepository {
  async index(q) {
    try {
      return await pagination(Drivers, +q.page || 1, q.limit, {
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

  async showByEmail(body) {
    try {
      const foundDriver = await Drivers.findOne({
        where: body,
        attributes: { exclude: ["password"] },
      });

      return foundDriver;
    } catch {
      return null;
    }
  }

  async countOrderByWeek(driverId) {
    try {
      let regWeek = [];
      let day = 1;
      while (day < 8) {
        const currDay = await Orders.findAndCountAll({
          attributes: ['id'],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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

  async countOrderByMonth(driverId) {
    try {
      let regWeek = [];
      let day = 1;
      while (day < 31) {
        const currDay = await Orders.findAndCountAll({
          attributes: ['id'],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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

  async countOrderByYear(driverId) {
    try {
      let regMonth = [];
      let month = 1;
      while (month < 13) {
        const currMonth = await Orders.findAndCountAll({
          attributes: ['id'],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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

  async sumOrderByWeek(driverId) {
    try {
      let regWeek = [];
      let day = 1;
      while (day < 8) {
        const currDay = await Orders.findAll({
          attributes: [
            [sequelizeConfig.fn('sum', sequelizeConfig.col('shipper_fee')), 'total_sum']
          ],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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

  async sumOrderByMonth(driverId) {
    try {
      let regWeek = [];
      let day = 1;
      while (day < 31) {
        const currDay = await Orders.findAll({
          attributes: [
            [sequelizeConfig.fn('sum', sequelizeConfig.col('shipper_fee')), 'total_sum']
          ],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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

  async sumOrderByYear(driverId) {
    try {
      let regMonth = [];
      let month = 1;
      while (month < 13) {
        const currMonth = await Orders.findAll({
          attributes: [
            [sequelizeConfig.fn('sum', sequelizeConfig.col('shipper_fee')), 'total_sum']
          ],
          where: {
            [Op.and]:
              [
                { driver_id: driverId },
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
      delete res[1][0].dataValues.password
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

  async forgotPassword(randomPassword, id) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      randomPassword = bcrypt.hashSync(randomPassword, salt);

      const res = await Drivers.update({
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
