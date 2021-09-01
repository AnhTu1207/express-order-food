const express = require("express");

const { CategoryController } = require(appRoot + "/controllers");
const { RequireAuth, AddCategoryValidate } = require(appRoot + "/middlewares");

const router = express.Router();

router.get("/", CategoryController.index);
router.get("/getAllCategory", CategoryController.getAllCategory);
router.get("/getCategoryById/:id", CategoryController.getCategoryById)
router.post("/addCategory", AddCategoryValidate, CategoryController.store)
router.put("/updateCategory/:id", AddCategoryValidate, CategoryController.update)
router.delete("/deleteCategory/:id", CategoryController.delete)

module.exports = router;
