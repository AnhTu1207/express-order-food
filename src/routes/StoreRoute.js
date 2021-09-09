const express = require("express");

const { StoreController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddStoreValidate, LoginValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", StoreController.index);
router.get("/getAllStore", StoreController.getAllStore);
router.get("/getStoreById/:id", StoreController.getStoreById)
router.post("/register", AddStoreValidate, StoreController.store);
router.post("/uploadImage/:id", StoreController.upload);
router.post("/editImage/:id", StoreController.edit)
router.post("/login", LoginValidate, StoreController.login);
router.put("/updateStore/:id", AddStoreValidate, StoreController.update)
router.delete("/deleteStore/:id", StoreController.delete)

module.exports = router;
