const UserRepository = require("./UserRepository");
const DriverRepository = require("./DriverRepository");
const FoodRepository = require("./FoodRepository");
// const OptionLabelRepository = require("./OptionLabelRepository");
// const OptionRepository = require("./OptionRepository");
const StoreRepository = require("./StoreRepository");
const CouponRepository = require("./CouponRepository");
const CategoryRepository = require("./CategoryRepository")
const OrderRepository = require("./OrderRepository");
const OrderItemRepository = require("./OrderItemRepository")

module.exports = {
  UserRepository,
  StoreRepository,
  DriverRepository,
  CategoryRepository,
  FoodRepository,
  CouponRepository,
  OrderRepository,
  OrderItemRepository
};
