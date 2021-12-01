const express = require("express");

const { StoreAuth, AdminAuth } = require(appRoot + "/middlewares");
const { AddCouponRequest, AddCouponRequest_Admin, UpdateCouponRequest } = require(appRoot + "/requests");
const router = express.Router();

const { CouponController } = require(appRoot + "/controllers");

router.get("/", CouponController.index);
router.get("/show/:id", CouponController.show)
router.get("/showByStore/:id", CouponController.showByStore)
router.get("/find/", CouponController.search)
router.post("/", [StoreAuth, AddCouponRequest], CouponController.store)
router.post("/addCoupon", [AdminAuth, AddCouponRequest_Admin], CouponController.store)
router.put("/:id", [StoreAuth, UpdateCouponRequest], CouponController.update)
router.delete("/:id", StoreAuth, CouponController.delete)

module.exports = router;
