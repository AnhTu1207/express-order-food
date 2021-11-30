const express = require("express");

const { UserController } = require(appRoot + "/controllers");
const { UpdateStorePasswordRequest } = require(appRoot + "/requests");

const router = express.Router();

router.get("/", UserController.index);
router.get("/show/:id", UserController.show);
router.put("/update-password/:id", UpdateStorePasswordRequest, UserController.updatePassword)
router.post("/uploadImage/:id", UserController.upload);
router.post("/editImage/:id", UserController.edit);

module.exports = router;
