const express = require("express");

const { AddCategoryRequest, UpdateCategoryRequest } = require(appRoot + "/requests");
const router = express.Router();

const { CategoryController } = require(appRoot + "/controllers");

router.get("/", CategoryController.index);
router.get("/show/:id", CategoryController.show)
router.post("/", AddCategoryRequest, CategoryController.store)
router.put("/:id", UpdateCategoryRequest, CategoryController.update)
router.delete("/:id", CategoryController.delete)

module.exports = router;
