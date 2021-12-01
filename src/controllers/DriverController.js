const { validationResult } = require("express-validator");
const { map } = require("lodash");

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
      const url = "http://" + req.headers.host + "/api/auth/verify/" + token;
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
}

module.exports = new DriverController();
