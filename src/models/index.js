const Users = require("./UserModel");
const Drivers = require("./DriverModel");
const Stores = require("./StoreModel");
const Categories = require("./CategoryModel");
const Foods = require("./FoodModel");
const Coupons = require("./CouponModel");
const Orders = require("./OrderModel");
const OrdersItems = require("./OrderItemModel");
const HistoryOrders = require("./HistoryOrderModel");
// const OrdersItemsOptions = require("./OrderItemOptionModel");
// const Options = require("./OptionModel");
// const OptionsLabels = require("./OptionLabelModel")

module.exports = {
  Users,
  Drivers,
  Stores,
  Categories,
  Foods,
  Coupons,
  Orders,
  OrdersItems,
  HistoryOrders
};