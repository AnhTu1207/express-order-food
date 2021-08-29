const express = require("express");

const { UserController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");

const router = express.Router();

router.get("/", RequireAuth, UserController.index);

module.exports = router;
