const express = require("express");

const { AddFoodRequest, UpdateFoodRequest } = require(appRoot + "/requests");
const { FoodAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { FoodController } = require(appRoot + "/controllers");

router.get("/", FoodController.index);
router.get("/show/:id", FoodController.show);
router.get("/showByCategory/:id", FoodController.showByCategory)
router.get("/showByStore/:id", FoodController.showByStore)
router.get("/find/", FoodController.search)
router.post("/", AddFoodRequest, FoodAuth, FoodController.store);
router.post("/uploadImage/:id", FoodAuth, FoodController.upload);
router.post("/editImage/:id", FoodAuth, FoodController.edit)
router.put("/:id", [FoodAuth, UpdateFoodRequest], FoodController.update)
router.delete("/:id", FoodAuth, FoodController.delete)

module.exports = router;
