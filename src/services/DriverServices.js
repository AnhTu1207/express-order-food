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

  async showTopDriver(q) {
    try {
      return await DriverRepository.showTopDriver(q);
    } catch (e) {
      throw e;
    }
  }


  async showCurrentOrder(driverId, q) {
    try {
      return await DriverRepository.showCurrentOrder(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async showCurrentOrder(driverId, q) {
    try {
      return await DriverRepository.showCurrentOrder(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async showOrderByPresent(driverId, q) {
    try {
      return await DriverRepository.showOrderByPresent(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async showOrderByWeek(driverId, q) {
    try {
      return await DriverRepository.showOrderByWeek(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async showOrderByMonth(driverId, q) {
    try {
      return await DriverRepository.showOrderByMonth(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async showOrderBetWeen(driverId, q) {
    try {
      return await DriverRepository.showOrderBetWeen(driverId, q);
    } catch (e) {
      throw e;
    }
  }

  async countOrderByWeek(driverId) {
    try {
      return await DriverRepository.countOrderByWeek(driverId);
    } catch (e) {
      throw e;
    }
  }

  async countOrderByMonth(driverId) {
    try {
      return await DriverRepository.countOrderByMonth(driverId);
    } catch (e) {
      throw e;
    }
  }

  async countOrderByYear(driverId) {
    try {
      return await DriverRepository.countOrderByYear(driverId);
    } catch (e) {
      throw e;
    }
  }

  async sumOrderByWeek(driverId) {
    try {
      return await DriverRepository.sumOrderByWeek(driverId);
    } catch (e) {
      throw e;
    }
  }

  async sumOrderByMonth(driverId) {
    try {
      return await DriverRepository.sumOrderByMonth(driverId);
    } catch (e) {
      throw e;
    }
  }

  async sumOrderByYear(driverId) {
    try {
      return await DriverRepository.sumOrderByYear(driverId);
    } catch (e) {
      throw e;
    }
  }

  async store(newDriver) {
    try {
      return await DriverRepository.store(newDriver);
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

  async updatePassword(updateDriver, id) {
    try {
      return await DriverRepository.updatePassword(updateDriver, id);
    } catch (e) {
      throw e;
    }
  }

  async forgotPassword(randomPassword, id) {
    try {
      return await DriverRepository.forgotPassword(randomPassword, id);
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

  async updateImage(filename, id) {
    try {
      return await DriverRepository.updateImage(filename, id);
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
