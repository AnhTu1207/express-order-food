const express = require("express");

const { AddUserRequest, LoginRequest } = require(appRoot + "/requests");
const { Verification } = require(appRoot + "/middlewares");
const router = express.Router();

<<<<<<< HEAD
const { UserController } = require(appRoot + "/controllers");
=======
const { UserController, MicsController } = require(appRoot + "/controllers");
>>>>>>> master

router.get("/verify/:token", Verification, MicsController.verify);
router.post("/register", AddUserRequest, UserController.store);
router.post("/login", LoginRequest, UserController.login);

module.exports = router;
