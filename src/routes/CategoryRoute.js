const express = require("express");

const { AdminAuth } = require(appRoot + "/middlewares");
const { AddCategoryRequest, UpdateCategoryRequest } = require(appRoot + "/requests");
const router = express.Router();

const { CategoryController } = require(appRoot + "/controllers");

router.get("/", CategoryController.index);
router.get("/show/:id", CategoryController.show)
router.post("/", [AdminAuth, AddCategoryRequest], CategoryController.store)
router.put("/:id", [AdminAuth, UpdateCategoryRequest], CategoryController.update)
router.delete("/:id", AdminAuth, CategoryController.delete)

module.exports = router;
