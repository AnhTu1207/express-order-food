const express = require("express");

const { AddUserRequest, LoginRequest, ResendEmailRequest } = require(appRoot + "/requests");
const { limiter } = require(appRoot + "/config");
const { Verification } = require(appRoot + "/middlewares");
const router = express.Router();

const { UserController, MicsController } = require(appRoot + "/controllers");

router.get("/verify/:token", Verification, MicsController.verify);
router.post("/register", AddUserRequest, UserController.store);
router.post("/login", LoginRequest, UserController.login);
router.post("/resend-email", [limiter.Authlimiter, ResendEmailRequest], UserController.resendVerification)
router.post("/forgot-password", [limiter.PasswordLimiter, ResendEmailRequest], UserController.forgotPassword)

module.exports = router;
