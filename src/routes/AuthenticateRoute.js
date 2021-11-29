const express = require("express");

const { AddUserRequest, LoginRequest } = require(appRoot + "/requests");
const { Verification } = require(appRoot + "/middlewares");
const router = express.Router();

const { UserController, MicsController } = require(appRoot + "/controllers");

router.get("/verify/:token", Verification, MicsController.verify);
router.post("/register", AddUserRequest, UserController.store);
router.post("/login", LoginRequest, UserController.login);

module.exports = router;
