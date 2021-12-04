const { UserRepository } = require(appRoot + "/repositories");

class UserService {
  async addUser(newUser) {
    try {
      return await UserRepository.store(newUser);
    } catch (e) {
      throw e;
    }
  }

  async login(infoLogin) {
    try {
      return await UserRepository.login(infoLogin);
    } catch (e) {
      throw e;
    }
  }

  async index(q) {
    try {
      return await UserRepository.index(q);
    } catch (e) {
      throw e;
    }
  }

  async show(id) {
    try {
      return await UserRepository.show(id);
    } catch (e) {
      throw e;
    }
  }

  async showByEmail(body) {
    try {
      return await UserRepository.showByEmail(body);
    } catch (e) {
      throw e;
    }
  }

  async update(updateUser, id) {
    try {
      return await UserRepository.update(updateUser, id);
    } catch (e) {
      throw e;
    }
  }

  async updatePassword(updateUser, id) {
    try {
      return await UserRepository.updatePassword(updateUser, id);
    } catch (e) {
      throw e;
    }
  }

  async forgotPassword(randomPassword, id) {
    try {
      return await UserRepository.forgotPassword(randomPassword, id);
    } catch (e) {
      throw e;
    }
  }

  async delete(id) {
    try {
      return await UserRepository.delete(id);
    } catch (e) {
      throw e;
    }
  }

  async updateImage(filename, id) {
    try {
      return await UserRepository.updateImage(filename, id);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserService();
