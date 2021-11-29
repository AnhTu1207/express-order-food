const express = require("express");

const { CategoryAuth } = require(appRoot + "/middlewares");
const { AddCategoryRequest, UpdateCategoryRequest } = require(appRoot + "/requests");
const router = express.Router();

const { CategoryController } = require(appRoot + "/controllers");

router.get("/", CategoryController.index);
router.get("/show/:id", CategoryController.show)
router.post("/", [CategoryAuth, AddCategoryRequest], CategoryController.store)
router.put("/:id", [CategoryAuth, UpdateCategoryRequest], CategoryController.update)
router.delete("/:id", CategoryAuth, CategoryController.delete)

module.exports = router;
