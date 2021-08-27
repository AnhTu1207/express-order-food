const { User } = require(appRoot + "/models");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

class UserRepository {
  async store(newUser) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      newUser.password = bcrypt.hashSync(newUser.password, salt);
      const res = await User.create({ ...newUser, id: uuidv4() });
      delete res.dataValues.password;
      return res.dataValues;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserRepository();
