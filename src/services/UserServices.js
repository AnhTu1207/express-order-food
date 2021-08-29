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

  async index() {}
}

module.exports = new UserService();
