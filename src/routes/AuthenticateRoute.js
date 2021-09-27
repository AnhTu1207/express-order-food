const express = require("express");

const { UserController } = require(appRoot + "/controllers");
const { AddUserValidate, LoginValidate } = require(appRoot + "/validations");

const router = express.Router();

router.post("/register", AddUserValidate, UserController.store);
router.post("/login", LoginValidate, UserController.login);

module.exports = router;
