const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const { Users } = require(appRoot + "/models");
const { jwt } = require(appRoot + "/helpers");

class UserRepository {
  async store(newUser) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      newUser.password = bcrypt.hashSync(newUser.password, salt);
      const res = await Users.create({ ...newUser, id: uuidv4() });
      delete res.dataValues.password;
      return res.dataValues;
    } catch (e) {
      throw e;
    }
  }

  async login(infoLogin) {
    try {
      let foundUser = null;
      if (infoLogin.email) {
        foundUser = await Users.findOne({
          where: { email: infoLogin.email.trim() },
        });
      } else {
        foundUser = await Users.findOne({
          where: { username: infoLogin.username.trim() },
        });
      }
      if (!foundUser) {
        return null;
      }

      const matchPassword = await bcrypt.compare(
        infoLogin.password,
        foundUser.dataValues.password
      );
      if (!matchPassword) {
        return null;
      }

      delete foundUser.dataValues.password;
      return {
        ...foundUser.dataValues,
        accessToken: jwt.sign(foundUser),
      };
    } catch (e) {
      throw e;
    }
  }

  async getUserById(id) {
    try {
      const foundUser = await Users.findOne({ 
        where: { id }
      });

      return foundUser;
    } catch {
      return null;
    }
  }
}

module.exports = new UserRepository();
