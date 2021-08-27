const { validationResult } = require("express-validator");

const { UserService } = require(appRoot + "/services");
const { map } = require("lodash");

class UserController {
  async index(req, res) {
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
      res.status(500).send();
    }
  }
}

module.exports = new UserController();
