const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const { Users } = require(appRoot + "/models");
const { jwt, pagination } = require(appRoot + "/helpers");

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

  async show(id) {
    try {
      const foundUser = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });

      return foundUser;
    } catch {
      return null;
    }
  }

  async showByEmail(body) {
    try {
      const foundUser = await Users.findOne({
        where: body,
        attributes: { exclude: ["password"] },
      });

      return foundUser;
    } catch {
      return null;
    }
  }

  async index(q) {
    try {
      return await pagination(Users, +q.page || 1, q.limit, {
        attributes: { exclude: ["password"] },
      });
    } catch (e) {
      throw e;
    }
  }

  async update(updateUser, id) {
    try {
      const res = await Users.update({
        ...updateUser
      }, {
        where: { id },
        returning: true
      })
      delete res[1][0].dataValues.password
      return res;
    } catch (e) {
      throw e
    }
  }

  async updatePassword(updateUser, id) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      const foundUser = await Users.findOne({
        where: { id }
      })

      const matchPassword = await bcrypt.compare(
        updateUser.oldpassword,
        foundUser.dataValues.password
      );
      if (!matchPassword) {
        return null;
      }
      updateUser.password = bcrypt.hashSync(updateUser.password, salt);
      const res = await Users.update({
        password: updateUser.password
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

  async forgotPassword(randomPassword, id) {
    try {
      const salt = bcrypt.genSaltSync(+process.env.SALT_ROUND);
      randomPassword = bcrypt.hashSync(randomPassword, salt);

      const res = await Users.update({
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
      const res = await Users.update({
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
      const res = await Users.destroy({
        where: { id }
      })
      return res;
    } catch (e) {
      throw e
    }
  }
}

module.exports = new UserRepository();
