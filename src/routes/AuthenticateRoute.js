const express = require("express");

const { AddUserValidate } = require(appRoot + "/middlewares");
const router = express.Router();

const { UserController } = require(appRoot + "/controllers");

router.post("/Register", AddUserValidate, UserController.index);

module.exports = router;
