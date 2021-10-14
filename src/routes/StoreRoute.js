const express = require("express");

const { AddStoreRequest, UpdateStoreRequest, UpdateStorePasswordRequest, LoginRequest } = require(appRoot +
  "/requests");
const router = express.Router();

const { StoreController } = require(appRoot + "/controllers");

router.get("/", StoreController.index);
router.get("/show/:id", StoreController.show);
router.post("/", AddStoreRequest, StoreController.store);
router.put("/:id", UpdateStoreRequest, StoreController.update);
router.put("/update-password/:id", UpdateStorePasswordRequest, StoreController.updatePassword)
router.delete("/:id", StoreController.delete);
router.post("/uploadImage/:id", StoreController.upload);
router.post("/editImage/:id", StoreController.edit);
router.post("/login", LoginRequest, StoreController.login);

module.exports = router;
