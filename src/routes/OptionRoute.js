const express = require("express");

const { AddOptionRequest, UpdateOptionRequest } = require(appRoot + "/requests");
const { FoodAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { OptionController } = require(appRoot + "/controllers");

router.get("/", OptionController.index);
router.get("/show/:id", OptionController.show);
router.post("/", [FoodAuth, AddOptionRequest], OptionController.store);
router.put("/:id", [FoodAuth, UpdateOptionRequest], OptionController.update)
router.delete("/:id", FoodAuth, OptionController.delete)

module.exports = router;
