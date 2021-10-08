const express = require("express");

const { Verification } = require(appRoot + "/middlewares");
const router = express.Router();

const { MicsController } = require(appRoot + "/controllers");

router.get("/verify/:token", Verification, MicsController.verify);

module.exports = router;
