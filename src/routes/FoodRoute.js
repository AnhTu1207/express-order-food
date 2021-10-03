const express = require("express");

const { AddFoodRequest } = require(appRoot + "/requests");
const router = express.Router();

const { FoodController } = require(appRoot + "/controllers");

router.get("/", FoodController.index);
router.get("/show/:id", FoodController.show);
router.get("/showByCategory/:id", FoodController.showByCategory)
router.get("/showByStore/:id", FoodController.showByStore)
router.post("/", AddFoodRequest, FoodController.store);
// router.post("/uploadImage/:id", FoodController.upload);
// router.post("/editImage/:id", FoodController.edit)
router.put("/:id", FoodController.update)
router.delete("/:id", FoodController.delete)

module.exports = router;
