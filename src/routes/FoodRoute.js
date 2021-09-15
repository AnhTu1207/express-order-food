const express = require("express");

const { FoodController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddFoodValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", FoodController.index);
router.get("/getById/:id", FoodController.getById);
router.get("/getByCategory/:id", FoodController.getByCategory)
router.post("/", AddFoodValidate, FoodController.store);
router.post("/uploadImage/:id", FoodController.upload);
router.post("/editImage/:id", FoodController.edit)
router.put("/:id", FoodController.update)
router.delete("/:id", FoodController.delete)

module.exports = router;
