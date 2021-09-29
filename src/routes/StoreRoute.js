const express = require("express");

const { AddStoreRequest, UpdateStoreRequest } = require(appRoot + "/requests");
const router = express.Router();

const { StoreController } = require(appRoot + "/controllers");

router.get("/", StoreController.index);
router.get("/show/:id", StoreController.show)
router.post("/", AddStoreRequest, StoreController.store)
router.post("/uploadImage/:id", StoreController.upload);
router.post("/editImage/:id", StoreController.edit)
router.post("/login", LoginValidate, StoreController.login);
router.put("/:id", UpdateStoreRequest, StoreController.update)
router.delete("/:id", StoreController.delete)

module.exports = router;
