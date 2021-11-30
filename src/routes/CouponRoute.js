const express = require("express");

const { StoreAuth } = require(appRoot + "/middlewares");
const { AddCouponRequest, UpdateCouponRequest } = require(appRoot + "/requests");
const router = express.Router();

const { CouponController } = require(appRoot + "/controllers");

router.get("/", CouponController.index);
router.get("/show/:id", CouponController.show)
router.get("/showByStore/:id", CouponController.showByStore)
router.get("/find/", CouponController.search)
router.post("/", [StoreAuth, AddCouponRequest], CouponController.store)
router.put("/:id", [StoreAuth, UpdateCouponRequest], CouponController.update)
router.delete("/:id", StoreAuth, CouponController.delete)

module.exports = router;
