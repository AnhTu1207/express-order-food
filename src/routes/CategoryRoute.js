const express = require("express");

const { CategoryController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddCategoryValidate, UpdateCategoryValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", RequireAuth, CategoryController.index);
router.get("/getById/:id", RequireAuth, CategoryController.getById)
router.post("/", [RequireAuth, AddCategoryValidate], CategoryController.store)
router.put("/:id", [RequireAuth, UpdateCategoryValidate], CategoryController.update)
router.delete("/:id", RequireAuth, CategoryController.delete)

module.exports = router;
