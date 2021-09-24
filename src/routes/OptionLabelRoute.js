const express = require("express");

const { OptionLabelController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddOptionLabelValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", OptionLabelController.index);
router.get("/getById/:id", OptionLabelController.getById);
router.post("/", AddOptionLabelValidate, OptionLabelController.store);
router.put("/:id", OptionLabelController.update)
router.delete("/:id", OptionLabelController.delete);

module.exports = router;
