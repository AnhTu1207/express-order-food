const express = require("express");

const { StoreAuth, AdminAuth } = require(appRoot + "/middlewares");
const { AddStoreRequest, LoginStoreRequest, UpdateStoreRequest, UpdatePasswordRequest, ResendEmailRequest, UpdateStatusRequest } = require(appRoot + "/requests");
const { limiter } = require(appRoot + "/config");
const router = express.Router();

const { StoreController } = require(appRoot + "/controllers");

router.get("/", StoreController.index);
router.get("/show/:id", StoreController.show);
router.get("/showOrderByPresent/:id", StoreAuth, StoreController.showOrderByPresent)
router.get("/showOrderByWeek/:id", StoreAuth, StoreController.showOrderByWeek)
router.get("/showOrderByMonth/:id", StoreAuth, StoreController.showOrderByMonth)
router.get("/showOrderBetWeen/:id", StoreAuth, StoreController.showOrderBetWeen)
router.get("/countOrderByWeek/:id", StoreAuth, StoreController.countOrderByWeek)
router.get("/countOrderByMonth/:id", StoreAuth, StoreController.countOrderByMonth)
router.get("/countOrderByYear/:id", StoreAuth, StoreController.countOrderByYear)
router.get("/sumOrderByWeek/:id", StoreAuth, StoreController.sumOrderByWeek)
router.get("/sumOrderByMonth/:id", StoreAuth, StoreController.sumOrderByMonth)
router.get("/sumOrderByYear/:id", StoreAuth, StoreController.sumOrderByYear)
router.post("/", AddStoreRequest, StoreController.store);
router.put("/:id", [StoreAuth, UpdateStoreRequest], StoreController.update);
router.put("/update-status/:id", [AdminAuth, UpdateStatusRequest], StoreController.updateStatus);
router.put("/update-password/:id", [StoreAuth, UpdatePasswordRequest], StoreController.updatePassword);
router.delete("/:id", StoreAuth, StoreController.delete);
router.post("/uploadImage/:id", StoreAuth, StoreController.upload);
router.post("/editImage/:id", StoreAuth, StoreController.edit);
router.post("/login", LoginStoreRequest, StoreController.login);
router.post("/resend-email", [limiter.Storelimiter, ResendEmailRequest], StoreController.resendVerification)
router.post("/forgot-password", [limiter.PasswordLimiter, ResendEmailRequest], StoreController.forgotPassword)

module.exports = router;
