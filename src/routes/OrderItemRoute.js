const express = require("express");

const { AddOrderItemRequest } = require(appRoot + "/requests");
const { RequireAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { OrderItemController } = require(appRoot + "/controllers");

router.post("/", [RequireAuth, AddOrderItemRequest], OrderItemController.store);

module.exports = router;
