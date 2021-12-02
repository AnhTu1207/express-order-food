const authRoutes = require("./AuthenticateRoute");
const userRoutes = require("./UserRoute");
const driverRoutes = require("./DriverRoute");
const foodRoutes = require("./FoodRoute");
// const optionLabelRoutes = require("./OptionLabelRoute");
// const optionRoutes = require("./OptionRoute");
const storeRoutes = require("./StoreRoute");
const categoryRoutes = require("./CategoryRoute");
const couponRoutes = require("./CouponRoute");
const orderRoutes = require("./OrderRoute");
const orderItemRoutes = require("./OrderItemRoute");

module.exports = {
  authRoutes,
  userRoutes,
  driverRoutes,
  foodRoutes,
  storeRoutes,
  categoryRoutes,
  couponRoutes,
  orderRoutes,
  orderItemRoutes
};
