const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

const { FoodService } = require(appRoot + "/services");
const { utility } = require(appRoot + "/helpers");
const { map } = require("lodash");

class FoodController {

  async index(req, res) {
    try {
      const data = await FoodService.index(req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const foundFood = await FoodService.show(id);
      if (foundFood === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      else {
        return res.status(200).json({ status: 200, data: foundFood });
      }
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showByCategory(req, res) {
    try {
      const id = req.params.id;
      const data = await FoodService.showByCategory(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async showByStore(req, res) {
    try {
      const id = req.params.id;
      const data = await FoodService.showByStore(id, req.query);
      return res.status(200).json(data);
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async search(req, res) {
    try {
      const data = await FoodService.search(req.query);
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
      const newFood = await FoodService.store(req.body);
      return res.status(201).json(newFood);
    } catch (e) {
      if (e instanceof Sequelize.ForeignKeyConstraintError) {
        return res.status(400).json({ status: 400, message: e.parent.detail });
      }
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
      const foundStore = await FoodService.show(id)
      if (foundStore === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      else {
        const data = await FoodService.update(req.body, id)
        return res.status(200).json({ status: 200, data: data[1][0] });
      }
    }
    catch (e) {
      if (e instanceof Sequelize.ForeignKeyConstraintError) {
        return res.status(400).json({ status: 400, message: e.parent.detail });
      }
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
      const deleteFood = await FoodService.show(id)
      if (deleteFood === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      else {
        await FoodService.delete(id)
        // Removing image
        if (deleteFood.avatar) {
          await utility.removeImage(utility.getPath(deleteFood.avatar))
        }
        return res.status(200).json({ status: 200, data: deleteFood });
      }
    }
    catch (e) {
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
      const id = req.params.id
      const foundFood = await FoodService.show(id);
      if (foundFood === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      const currUpload = utility.uploadImage('foods');
      currUpload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ status: 400, message: err.message });
        }
        if (!req.file) {
          return res.status(400).json({ status: 400, message: "No image received" });
        }
        const url = "http://" + req.headers.host + utility.getUrl(req.file.destination, req.file.filename)
        const result = await FoodService.updateImage(url, id)
        if (result) {
          return res.status(201).json({ status: 201, data: url });
        }
        res.status(400).json({ status: 400, message: "Error during uploading" })
      });

    } catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id
      const foundFood = await FoodService.show(id);
      if (foundFood === null) {
        return res.status(400).json({ status: 400, message: "Invalid ID or record does not exist" });
      }
      const currUpload = utility.uploadImage('foods');
      currUpload(req, res, async function (err) {
        if (err) {
          return res.status(400).json({ status: 400, message: err.message });
        }
        if (!req.file) {
          return res.status(400).json({ status: 400, message: "No image received" });
        }
        // Removing old image before editing
        await utility.removeImage(utility.getPath(foundFood.avatar))

        const url = "http://" + req.headers.host + utility.getUrl(req.file.destination, req.file.filename)
        const result = await FoodService.updateImage(url, id)
        if (result) {
          return res.status(201).json({ status: 201, data: url });
        }
        res.status(400).json({ status: 400, message: "Error during uploading" })
      });

    } catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }
}

module.exports = new FoodController();
