const { validationResult } = require("express-validator");
const { map } = require("lodash");
const { utility } = require(appRoot + "/helpers");
const { DriverService } = require(appRoot + "/services");

class DriverController {
  async index(req, res) {
    try {
      const data = await DriverService.index(req.query);
      return res.status(200).json(data);
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({
          message: map(e.errors, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const foundDriver = await DriverService.show(id);
      if (foundDriver === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        return res.status(200).json({
          status: 200,
          data: foundDriver,
        });
      }
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.errors, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }

  async driver(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: errors,
      });
    }
    try {
      const newDriver = await DriverService.driver(req.body);
      return res.status(201).json({ status: 201, data: newDriver });
    } catch (e) {
      if (e.erros && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: errors,
      });
    }
    try {
      const id = req.params.id;
      const foundDriver = await DriverService.show(id);
      if (foundDriver === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        const data = await DriverService.update(req.body, id);
        return res.status(200).json({
          status: 200,
          data: data[1][0],
        });
      }
    } catch (e) {
      if (e.errors && e.erros.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.erros, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deleteDriver = await DriverService.show(id);
      if (deleteDriver === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        await DriverService.delete(id);
        // Remove avatar
        if (deleteDriver.avatar) {
          await utility.removeImage(utility.getPatch(deleteDriver.avatar));
          return res.status(200).json({
            status: 200,
            data: deleteDriver,
          });
        }
      }
    } catch (e) {
      if (e.errors && e.erros.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.erros, (e) => e.message),
        });
      }
      return res.status(500).send();
    }
  }

  async login(req, res) {
    const errros = validationResult(req);
    if (!errros.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: erros,
      });
    }
    try {
      const driverLogin = await DriverService.login(req.body);
      if (!driverLogin) {
        return res.status(400).json({
          status: 400,
          message: "Wrong email or password",
        });
      }
      return res.status(200).json({ data: driverLogin });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.erros, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }
}

module.exports = new DriverController();
