const express = require("express");

const { StoreAuth } = require(appRoot + "/middlewares");
const { AddStoreRequest, LoginStoreRequest, UpdateStoreRequest, UpdatePasswordRequest, ResendEmailRequest } = require(appRoot + "/requests");
const { limiter } = require(appRoot + "/config");
const router = express.Router();

const { StoreController } = require(appRoot + "/controllers");

router.get("/", StoreController.index);
router.get("/show/:id", StoreController.show);
router.get("/showOrderByPresent/:id", StoreController.showOrderByPresent)
router.get("/showOrderByWeek/:id", StoreController.showOrderByWeek)
router.get("/showOrderByMonth/:id", StoreController.showOrderByMonth)
router.get("/showOrderBetWeen/:id", StoreController.showOrderBetWeen)
router.get("/countOrderByWeek/:id", StoreController.countOrderByWeek)
router.get("/countOrderByMonth/:id", StoreController.countOrderByMonth)
router.get("/countOrderByYear/:id", StoreController.countOrderByYear)
router.get("/sumOrderByWeek/:id", StoreController.sumOrderByWeek)
router.get("/sumOrderByMonth/:id", StoreController.sumOrderByMonth)
router.get("/sumOrderByYear/:id", StoreController.sumOrderByYear)
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
