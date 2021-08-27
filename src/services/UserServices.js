const { UserRepository } = require(appRoot + "/repositories");

class UserService {
  async addUser(newUser) {
    try {
      return await UserRepository.store(newUser);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserService();
