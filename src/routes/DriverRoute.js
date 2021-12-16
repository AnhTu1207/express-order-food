const express = require("express");

const { DriverAuth, AdminAuth } = require(appRoot + "/middlewares");
const { AddDriverRequest, UpdateDriverRequest, LoginRequest, UpdatePasswordRequest, ResendEmailRequest } = require(appRoot + "/requests");
const { limiter } = require(appRoot + "/config");
const router = express.Router();

const { DriverController } = require(appRoot + "/controllers");

router.get("/", DriverController.index);
router.get("/show/:id", DriverController.show);
router.get("/showCurrentOrder/:id", DriverController.showCurrentOrder)
router.get("/showOrderByPresent/:id", DriverController.showOrderByPresent)
router.get("/showOrderByWeek/:id", DriverAuth, DriverController.showOrderByWeek)
router.get("/showOrderByMonth/:id", DriverAuth, DriverController.showOrderByMonth)
router.get("/showOrderBetWeen/:id", DriverAuth, DriverController.showOrderBetWeen)
router.get("/countOrderByWeek/:id", DriverAuth, DriverController.countOrderByWeek)
router.get("/countOrderByMonth/:id", DriverAuth, DriverController.countOrderByMonth)
router.get("/countOrderByYear/:id", DriverAuth, DriverController.countOrderByYear)
router.get("/sumOrderByWeek/:id", DriverAuth, DriverController.sumOrderByWeek)
router.get("/sumOrderByMonth/:id", DriverAuth, DriverController.sumOrderByMonth)
router.get("/sumOrderByYear/:id", DriverAuth, DriverController.sumOrderByYear)
router.post("/", AddDriverRequest, DriverController.store);
router.put("/:id", [DriverAuth, UpdateDriverRequest], DriverController.update);
router.put("/update-password/:id", [DriverAuth, UpdatePasswordRequest], DriverController.updatePassword)
router.delete("/:id", AdminAuth, DriverController.delete);
router.post("/uploadImage/:id", DriverAuth, DriverController.upload);
router.post("/editImage/:id", DriverAuth, DriverController.edit);
router.post("/login", LoginRequest, DriverController.login);
router.post("/resend-email", [limiter.Driverlimiter, ResendEmailRequest], DriverController.resendVerification)
router.post("/forgot-password", [limiter.PasswordLimiter, ResendEmailRequest], DriverController.forgotPassword)

module.exports = router;
