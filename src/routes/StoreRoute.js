const express = require("express");

const { StoreAuth } = require(appRoot + "/middlewares");
const { AddStoreRequest, LoginStoreRequest, UpdateStoreRequest, UpdatePasswordRequest, ResendEmailRequest } = require(appRoot + "/requests");
const { limiter } = require(appRoot + "/config");
const router = express.Router();

const { StoreController } = require(appRoot + "/controllers");

router.get("/", StoreController.index);
router.get("/show/:id", StoreController.show);
router.post("/", AddStoreRequest, StoreController.store);
router.put("/:id", [StoreAuth, UpdateStoreRequest], StoreController.update);
router.put("/update-password/:id", [StoreAuth, UpdatePasswordRequest], StoreController.updatePassword)
router.delete("/:id", StoreAuth, StoreController.delete);
router.post("/uploadImage/:id", StoreAuth, StoreController.upload);
router.post("/editImage/:id", StoreAuth, StoreController.edit);
router.post("/login", LoginStoreRequest, StoreController.login);
router.post("/resend-email", [limiter.Storelimiter, ResendEmailRequest], StoreController.resendVerification)
router.post("/forgot-password", [limiter.PasswordLimiter, ResendEmailRequest], StoreController.forgotPassword)

module.exports = router;
