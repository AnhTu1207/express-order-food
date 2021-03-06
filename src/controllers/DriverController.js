const { validationResult } = require("express-validator");
const { map } = require("lodash");
const { generate } = require('generate-password')
const Sequelize = require('sequelize')

const { utility, mailer, jwt } = require(appRoot + "/helpers");
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

  async showTopDriver(req, res) {
    try {
      const data = await DriverService.showTopDriver(req.query);
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

  async showCurrentOrder(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.showCurrentOrder(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showOrderByPresent(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.showOrderByPresent(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showOrderByWeek(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.showOrderByWeek(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showOrderByMonth(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.showOrderByMonth(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showOrderBetWeen(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.showOrderBetWeen(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async countOrderByWeek(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.countOrderByWeek(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async countOrderByMonth(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.countOrderByMonth(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async countOrderByYear(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.countOrderByYear(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async sumOrderByWeek(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.sumOrderByWeek(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async sumOrderByMonth(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.sumOrderByMonth(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async sumOrderByYear(req, res) {
    try {
      const id = req.params.id;
      const data = await DriverService.sumOrderByYear(id);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: errors,
      });
    }
    try {
      const newDriver = await DriverService.store(req.body);
      // Send email to validate
      const token = jwt.sign({ ...newDriver, 'role': 'driver' }, "1h");
      const url = process.env.CLIENT_URL + "/verify/" + token;
      await mailer.sendMail(newDriver.email, "You need to verify in order to use our services!!!", url);

      return res.status(201).json(newDriver);
    } catch (e) {
      if (e.errors && e.errors.length) {
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
      if (e.errors && e.errors.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.errors, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }

  async updatePassword(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
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
        const data = await DriverService.updatePassword(req.body, id);
        if (!data) {
          return res.status(400).json({ status: 400, message: "Old password does not match" });
        }
        return res.status(200).json({ status: 200, message: "Password has been updated!" });
      }
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async updateStatus(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
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
        return res.status(200).json({ status: 200, data: data[1][0] });
      }
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
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
        // Removing image
        if (deleteDriver.avatar) {
          await utility.removeImage(deleteDriver.avatar);
        }
        return res.status(200).json({ status: 200, data: deleteDriver });
      }
    } catch (e) {
      if (e instanceof Sequelize.ForeignKeyConstraintError) {
        return res.status(400).json({ status: 400, message: e.parent.detail });
      }
      if (e.errors && e.errors.length) {
        return res.status(400).json({
          status: 400,
          message: map(e.errors, (e) => e.message),
        });
      }
      return res.status(500).send();
    }
  }

  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
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
          message: map(e.errors, (e) => e.message),
        });
      }
      res.status(500).send();
    }
  }

  async upload(req, res) {
    try {
      const id = req.params.id;
      const foundDriver = await DriverService.show(req.params.id);
      if (foundDriver === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      }
      const currUpload = utility.uploadImage();
      currUpload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ status: 400, message: err.message });
        }
        if (!req.file) {
          return res
            .status(400)
            .json({ status: 400, message: "No image received" });
        }
        const result = await DriverService.updateImage(req.file.location, id);
        if (result) {
          return res.status(201).json({ status: 201, data: req.file.location });
        }
        res
          .status(400)
          .json({ status: 400, message: "Error during uploading" });
      });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id;
      const foundDriver = await DriverService.show(req.params.id);
      if (foundDriver === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      }
      // Check if avatar is null or not
      if (!foundDriver.avatar) {
        return res.status(200).json({ status: 400, message: "Please upload avatar before editing" })
      }
      const currUpload = utility.uploadImage();
      currUpload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ status: 400, message: err.message });
        }
        if (!req.file) {
          return res
            .status(400)
            .json({ status: 400, message: "No image received" });
        }
        // Removing old image on Bucket
        await utility.removeImage(foundDriver.avatar);
        const result = await DriverService.updateImage(req.file.location, id);
        if (result) {
          return res.status(201).json({ status: 201, data: req.file.location });
        }
        res
          .status(400)
          .json({ status: 400, message: "Error during uploading" });
      });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async resendVerification(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const foundDriver = await DriverService.showByEmail(req.body);
      if (foundDriver === null) {
        return res.status(400).json({ status: 400, message: "No driver found with this email id, please check your email or incorrect link" });
      }
      if (foundDriver.is_verified) {
        return res.status(400).json({ status: 400, message: "Account is already verified" });
      }
      // Send email to validate
      const token = jwt.sign({ ...foundDriver.toJSON(), 'role': 'store' }, "1h");
      const url = process.env.CLIENT_URL + "/verify/" + token;
      await mailer.sendMail(foundDriver.email, "You need to verify in order to use our services!!!", url);
      return res.status(200).json({ status: 200, message: "Email has been sent" });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).json({ message: e.message });
    }
  }

  async forgotPassword(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const foundDriver = await DriverService.showByEmail(req.body);
      if (foundDriver === null) {
        return res.status(400).json({ status: 400, message: "No driver found with this email id, please check your email or incorrect link" });
      }
      const newPassword = generate({
        length: 12,
        numbers: true
      });
      const updateUser = await DriverService.forgotPassword(newPassword, foundDriver.id)
      if (updateUser[1][0]) {
        await mailer.forgotPasswordMail(foundDriver.email, "Reset your Food Guru password !!!", newPassword, process.env.DRIVER_URL);
        return res.status(200).json({ status: 200, message: "Email has been sent" });
      }
      return res.status(400).json(newPassword);
      // Send email to validate
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new DriverController();
