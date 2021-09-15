const express = require("express");

const { OptionController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddOptionValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", OptionController.index);
router.get("/getById/:id", OptionController.getById);
router.post("/", AddOptionValidate, OptionController.store);
router.put("/:id", OptionController.update)
router.delete("/:id", OptionController.delete)

module.exports = router;
