const { validationResult } = require("express-validator");

const { UserService } = require(appRoot + "/services");
const { map } = require("lodash");

class UserController {

  async index(req, res) {
    try {
      const data = await UserService.index(req.query);
      return res.status(200).json(data);
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).json({ message: e.message });
    }
  }

  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const newUser = await UserService.addUser(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).json({ message: e.message });
    }
  }

  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const userLogin = await UserService.login(req.body);
      if (!userLogin) {
        return res
          .status(400)
          .json({ status: 400, message: "Wrong username or password" });
      }
      return res.status(200).json({ data: userLogin });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async update() { }

  async delete() { }

}

module.exports = new UserController();
