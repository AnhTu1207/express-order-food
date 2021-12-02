const { validationResult } = require("express-validator");

const { UserService } = require(appRoot + "/services");
const { utility, mailer, jwt } = require(appRoot + "/helpers");
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

  async show(req, res) {
    try {
      const foundUser = await UserService.show(req.params.id);
      if (foundUser === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      else {
        return res.status(200).json({ status: 200, data: foundUser });
      }
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
      const newUser = await UserService.addUser(req.body);
      // Send email to validate
      const token = jwt.sign({ ...newUser, 'role': 'user' }, "1h");
      const url = process.env.CLIENT_URL + "/verify/" + token;
      await mailer.sendMail(newUser.email, "You need to verify in order to use our services!!!", url);
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

  async update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const id = req.params.id;
      const foundUser = await UserService.show(id);
      if (foundUser === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        const data = await UserService.update(req.body, id);
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
      const foundUser = await UserService.show(id);
      if (foundUser === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        const data = await UserService.updatePassword(req.body, id);
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
      const deleteUser = await UserService.show(id);
      if (deleteUser === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      } else {
        await UserService.delete(id);
        // Removing image
        if (deleteUser.avatar) {
          await utility.removeImage(deleteUser.avatar);
        }
        return res.status(200).json({ status: 200, data: deleteUser });
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

  async upload(req, res) {
    try {
      const id = req.params.id;
      const foundUser = await UserService.show(req.params.id);
      if (foundUser === null) {
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
        const result = await UserService.updateImage(req.file.location, id);
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
      const foundUser = await UserService.show(req.params.id);
      if (foundUser === null) {
        return res.status(400).json({
          status: 400,
          message: "Invalid ID or record does not exist",
        });
      }
      // Check if avatar is null or not
      if (!foundUser.avatar) {
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
        await utility.removeImage(foundUser.avatar);
        const result = await UserService.updateImage(req.file.location, id);
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

module.exports = new UserController();
