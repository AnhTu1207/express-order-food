const express = require("express");

const { AddUserRequest, LoginRequest } = require(appRoot + "/requests");
const router = express.Router();

const { UserController } = require(appRoot + "/controllers");

router.post("/register", AddUserRequest, UserController.store);
router.post("/login", LoginRequest, UserController.login);

module.exports = router;
