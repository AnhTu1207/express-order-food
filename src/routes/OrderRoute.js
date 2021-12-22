const express = require("express");

const { AddOrderRequest, UpdateOrderDriverRequest, UpdateOrderStatus, UpdateOrderRating } = require(appRoot + "/requests");
const { RequireAuth, DriverAuth } = require(appRoot + "/middlewares");
const router = express.Router();

const { OrderController } = require(appRoot + "/controllers");

router.get("/", OrderController.index);
router.get("/showByProcessingOrder/:id", OrderController.showByProcessingOrderStore);
router.get("/showByFindindDriver", DriverAuth, OrderController.showByFindindDriver);
router.get("/show/:id", OrderController.show);
router.get("/showByStore/:id", OrderController.showByStore);
router.get("/showByDriver/:id", DriverAuth, OrderController.showByDriver);
router.get("/showByUser/:id", RequireAuth, OrderController.showByUser);
router.post("/", [RequireAuth, AddOrderRequest], OrderController.store);
router.put("/:id", [DriverAuth, UpdateOrderDriverRequest], OrderController.update);
router.put("/updateStatus/:id", [DriverAuth, UpdateOrderStatus], OrderController.updateStatus);
router.put("/updateRating/:id", UpdateOrderRating, OrderController.updateRating);
router.delete("/:id", RequireAuth, OrderController.delete);

module.exports = router;
