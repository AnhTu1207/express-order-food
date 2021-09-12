const express = require("express");

const { StoreController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddStoreValidate, LoginValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", StoreController.index);
router.get("/getById/:id", StoreController.getById)
router.post("/", AddStoreValidate, StoreController.store);
router.post("/uploadImage/:id", StoreController.upload);
router.post("/editImage/:id", StoreController.edit)
router.post("/login", LoginValidate, StoreController.login);
router.put("/:id", AddStoreValidate, StoreController.update)
router.delete("/:id", StoreController.delete)

module.exports = router;
