const { validationResult } = require("express-validator");

const { FoodService, StoreService, CategoryService } = require(appRoot + "/services");
const { map } = require("lodash");

class FoodController {
  async index(req, res) {
    try {
      const allFood = await FoodService.getAllFood();
      return res.status(200).json({ status: 200, data: allFood });
    }
    catch (e) {
      if (e.errors && e.errors.length) {
        return res.status(400).json({ status: 400, message: map(e.errors, (e) => e.message) });
      }
      res.status(500).send();
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const foundFood = await FoodService.getFoodById(id);
      if (foundFood === null) {
        return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
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

  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 400, message: errors });
    }
    try {
      const result = await CategoryService.checkUnique(req.body.category_id) && await StoreService.checkUnique(req.body.store_id);
      if (!result) {
        return res.status(400).json({ status: 400, message: "Invalid category_id or store_id" });
      }
      const newFood = await FoodService.addFood(req.body);
      return res.status(201).json(newFood);
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
    try {
      const id = req.params.id;
      const foundStore = await FoodService.getFoodById(id)
      if (foundStore === null) {
        return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
      }
      else {
        const flag = await CategoryService.checkUnique(req.body.category_id);
        if (!flag) {
          return res.status(400).json({ status: 400, message: "Invalid category_id" });
        }
        const result = await FoodService.updateFood(req.body, id)
        if (result) {
          const data = await FoodService.getFoodById(id)
          return res.status(200).json({ status: 200, data: data });
        }
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

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deleteFood = await FoodService.getFoodById(id)
      if (deleteFood === null) {
        return res.status(404).json({ status: 404, message: "Invalid ID or record does not exist" });
      }
      else {
        await FoodService.deleteFood(id)
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
}

module.exports = new FoodController();
