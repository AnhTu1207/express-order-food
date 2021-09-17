const express = require("express");

const { OptionLabelController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddOptionLabelValidate } = require(appRoot + "/validations");

const router = express.Router();

router.post("/", AddOptionLabelValidate, OptionLabelController.store);

module.exports = router;
