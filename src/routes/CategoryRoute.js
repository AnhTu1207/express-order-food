const express = require("express");

const { CategoryController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");
const { AddCategoryValidate } = require(appRoot + "/validations");

const router = express.Router();

router.get("/", CategoryController.index);
router.get("/getAllCategory", CategoryController.getAllCategory);
router.get("/getCategoryById/:id", CategoryController.getCategoryById)
router.post("/addCategory", AddCategoryValidate, CategoryController.store)
router.put("/updateCategory/:id", AddCategoryValidate, CategoryController.update)
router.delete("/deleteCategory/:id", CategoryController.delete)

module.exports = router;
