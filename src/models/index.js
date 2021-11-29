const Users = require("./UserModel");
const Drivers = require("./DriverModel");
const Stores = require("./StoreModel");
const Categories = require("./CategoryModel");
const Foods = require("./FoodModel");
const Options = require("./OptionModel");
const OptionsLabels = require("./OptionLabelModel")
const Coupons = require("./CouponModel");
const Orders = require("./OrderModel");
const OrdersItems = require("./OrderItemModel");
const OrdersItemsOptions = require("./OrderItemOptionModel");

module.exports = {
  Users,
  Drivers,
  Stores,
  Categories,
  Foods,
  Options,
  OptionsLabels,
  Coupons,
  Orders,
  OrdersItems,
  OrdersItemsOptions,
};