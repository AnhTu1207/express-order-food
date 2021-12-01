const express = require("express");

const { AdminAuth } = require(appRoot + "/middlewares");
const { UserController } = require(appRoot + "/controllers");
const { UpdatePasswordRequest, UpdateUserRequest } = require(appRoot + "/requests");

const router = express.Router();

router.get("/", UserController.index);
router.get("/show/:id", UserController.show);
router.put("/:id", UpdateUserRequest, UserController.update)
router.put("/update-password/:id", UpdatePasswordRequest, UserController.updatePassword)
router.delete("/:id", AdminAuth, UserController.delete);
router.post("/uploadImage/:id", UserController.upload);
router.post("/editImage/:id", UserController.edit);

module.exports = router;
