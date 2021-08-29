const express = require("express");

const { AddUserValidate, LoginValidate } = require(appRoot + "/middlewares");
const router = express.Router();

const { UserController } = require(appRoot + "/controllers");

router.post("/register", AddUserValidate, UserController.store);
router.post("/login", LoginValidate, UserController.login);

module.exports = router;
