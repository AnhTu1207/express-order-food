const express = require("express");

const { FoodController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddFoodValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", FoodController.index);
router.get("/getById/:id", FoodController.getById);
router.post("/", AddFoodValidate, FoodController.store);
router.put("/:id", FoodController.update)
router.delete("/:id", FoodController.delete)

module.exports = router;
