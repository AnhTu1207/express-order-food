const express = require("express");

const { DriverAuth, AdminAuth } = require(appRoot + "/middlewares");
const { AddDriverRequest, UpdateDriverRequest, LoginRequest, UpdatePasswordRequest } = require(appRoot + "/requests");
const router = express.Router();

const { DriverController } = require(appRoot + "/controllers");

router.get("/", DriverController.index);
router.get("/show/:id", DriverController.show);
router.post("/", AddDriverRequest, DriverController.store);
router.put("/:id", [DriverAuth, UpdateDriverRequest], DriverController.update);
router.put("/update-password/:id", [DriverAuth, UpdatePasswordRequest], DriverController.updatePassword)
router.delete("/:id", AdminAuth, DriverController.delete);
router.post("/uploadImage/:id", DriverAuth, DriverController.upload);
router.post("/editImage/:id", DriverAuth, DriverController.edit);
router.post("/login", LoginRequest, DriverController.login);

module.exports = router;
