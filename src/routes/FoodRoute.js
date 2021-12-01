const express = require("express");

const { AddFoodRequest, UpdateFoodRequest } = require(appRoot + "/requests");
const { StoreAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { FoodController } = require(appRoot + "/controllers");

router.get("/", FoodController.index);
router.get("/show/:id", FoodController.show);
router.get("/showByCategory/:id", FoodController.showByCategory)
router.get("/showByStore/:id", FoodController.showByStore)
router.get("/find/", FoodController.search)
router.post("/", AddFoodRequest, StoreAuth, FoodController.store);
router.post("/uploadImage/:id", StoreAuth, FoodController.upload);
router.post("/editImage/:id", StoreAuth, FoodController.edit)
router.put("/:id", [StoreAuth, UpdateFoodRequest], FoodController.update)
router.delete("/:id", StoreAuth, FoodController.delete)

module.exports = router;
