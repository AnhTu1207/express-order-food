const express = require("express");
const {
  AddDriverRequest,
  UpdateDriverRequest,
  LoginRequest,
} = require(appRoot + "/requests");
const router = express.Router();
const { DriverController } = require(appRoot + "/controllers");

router.get("/", DriverController.index);
router.get("/show/:id", DriverController.show);
router.post("/", AddDriverRequest, DriverController.driver);
router.put("/:id", UpdateDriverRequest, DriverController.update);
router.delete("/:id", DriverController.delete);
router.post("/login", LoginRequest, DriverController.login);

module.exports = router;
