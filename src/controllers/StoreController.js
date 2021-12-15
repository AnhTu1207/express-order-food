const { validationResult } = require("express-validator");
const { map } = require("lodash");
const { generate } = require('generate-password')

const { utility, mailer, jwt } = require(appRoot + "/helpers");
const { StoreService } = require(appRoot + "/services");
class StoreController {
  async index(req, res) {
    try {
      const data = await StoreService.index(req.query);
      return res.status(200).json(data);
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

  async show(req, res) {
    try {
      const id = req.params.id;
      const foundStore = await StoreService.show(id);
      if (foundStore === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        return res.status(200).json({ status: 200, data: foundStore });
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

  async showOrderByPresent(req, res) {
    try {
      const id = req.params.id;
      const data = await StoreService.showOrderByPresent(id, req.query);
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
      const data = await StoreService.showOrderByWeek(id, req.query);
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
      const data = await StoreService.showOrderByMonth(id, req.query);
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
      const data = await StoreService.showOrderBetWeen(id, req.query);
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
      const data = await StoreService.countOrderByWeek(id);
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
      const data = await StoreService.countOrderByMonth(id);
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
      const data = await StoreService.countOrderByYear(id);
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
      const data = await StoreService.sumOrderByWeek(id);
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
      const data = await StoreService.sumOrderByMonth(id);
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
      const data = await StoreService.sumOrderByYear(id);
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
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const newStore = await StoreService.store(req.body);
      // Send email to validate
      const token = jwt.sign({ ...newStore, 'role': 'store' }, "1h");
      const url = process.env.CLIENT_URL + "/verify/" + token;
      await mailer.sendMail(newStore.email, "You need to verify in order to use our services!!!", url);

      return res.status(201).json(newStore);
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
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const id = req.params.id;
      const foundStore = await StoreService.show(id);
      if (foundStore === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        const data = await StoreService.update(req.body, id);
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

  async updatePassword(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const id = req.params.id;
      const foundStore = await StoreService.show(id);
      if (foundStore === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        const data = await StoreService.updatePassword(req.body, id);
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
      const deleteStore = await StoreService.show(id);
      if (deleteStore === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        await StoreService.delete(id);
        // Removing image
        if (deleteStore.avatar) {
          await utility.removeImage(deleteStore.avatar);
        }
        return res.status(200).json({ status: 200, data: deleteStore });
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

  async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const storeLogin = await StoreService.login(req.body);
      if (!storeLogin) {
        return res
          .status(400)
          .json({ status: 400, message: "Wrong email or password" });
      }
      return res.status(200).json({ data: storeLogin });
    } catch (e) {
      if (e.errors && e.errors.length) {
        return res
          .status(400)
          .json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async upload(req, res) {
    try {
      const id = req.params.id;
      const foundStore = await StoreService.show(req.params.id);
      if (foundStore === null) {
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
        const result = await StoreService.updateImage(req.file.location, id);
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
      const foundStore = await StoreService.show(req.params.id);
      if (foundStore === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      }
      // Check if avatar is null or not
      if (!foundStore.avatar) {
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
        await utility.removeImage(foundStore.avatar);
        const result = await StoreService.updateImage(req.file.location, id);
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
      const foundStore = await StoreService.showByEmail(req.body);
      if (foundStore === null) {
        return res.status(400).json({ status: 400, message: "No store found with this email id, please check your email or incorrect link" });
      }
      if (foundStore.is_verified) {
        return res.status(400).json({ status: 400, message: "Account is already verified" });
      }
      // Send email to validate
      const token = jwt.sign({ ...foundStore.toJSON(), 'role': 'store' }, "1h");
      const url = process.env.CLIENT_URL + "/verify/" + token;
      await mailer.sendMail(foundStore.email, "You need to verify in order to use our services!!!", url);
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
      const foundStore = await StoreService.showByEmail(req.body);
      if (foundStore === null) {
        return res.status(400).json({ status: 400, message: "No user found with this email id, please check your email or incorrect link" });
      }
      const newPassword = generate({
        length: 12,
        numbers: true
      });
      const updateUser = await StoreService.forgotPassword(newPassword, foundStore.id)
      if (updateUser[1][0]) {
        await mailer.forgotPasswordMail(foundStore.email, "Reset your Food Guru password !!!", newPassword, process.env.STORE_URL);
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

module.exports = new StoreController();
