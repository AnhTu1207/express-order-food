const express = require("express");

const { CategoryController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddCategoryValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", CategoryController.index);
router.get("/getById/:id", CategoryController.getById)
router.post("/", AddCategoryValidate, CategoryController.store)
router.put("/:id", AddCategoryValidate, CategoryController.update)
router.delete("/:id", CategoryController.delete)

module.exports = router;
