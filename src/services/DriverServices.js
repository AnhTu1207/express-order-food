const { DriverRepository } = require(appRoot + "/repositories");

class DriverService {
  async index(q) {
    try {
      return await DriverRepository.index(q);
    } catch (e) {
      throw e;
    }
  }

  async show(id) {
    try {
      return await DriverRepository.show(id);
    } catch (e) {
      throw e;
    }
  }

  async driver(newDriver) {
    try {
      return await DriverRepository.driver(newDriver);
    } catch (e) {
      throw e;
    }
  }

  async update(updateDriver, id) {
    try {
      return await DriverRepository.update(updateDriver, id);
    } catch (e) {
      throw e;
    }
  }

  async delete(id) {
    try {
      return await DriverRepository.delete(id);
    } catch (e) {
      throw e;
    }
  }

  async login(infoLogin) {
    try {
      return await DriverRepository.login(infoLogin);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new DriverService();
