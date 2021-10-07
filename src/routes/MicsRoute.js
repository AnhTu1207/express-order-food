const express = require("express");

const { Verify } = require(appRoot + "/middlewares");
const router = express.Router();

const { UserController } = require(appRoot + "/controllers");

router.get("/verify/:token", Verify, UserController.verify);

module.exports = router;
