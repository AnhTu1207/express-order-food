const express = require("express");

const { AddOptionLabelRequest, UpdateOptionLabelRequest } = require(appRoot + "/requests");
const { FoodAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { OptionLabelController } = require(appRoot + "/controllers");

router.get("/", OptionLabelController.index);
router.get("/show/:id", OptionLabelController.show);
router.post("/", [FoodAuth, AddOptionLabelRequest], OptionLabelController.store);
router.put("/:id", [FoodAuth, UpdateOptionLabelRequest], OptionLabelController.update)
router.delete("/:id", FoodAuth, OptionLabelController.delete);

module.exports = router;
