// Auth Request
const AddUserRequest = require("./AuthRequest/AddUserRequest");
const LoginRequest = require("./AuthRequest/LoginRequest");
const LoginStoreRequest = require("./AuthRequest/LoginStoreRequest");
const UpdatePasswordRequest = require("./AuthRequest/UpdatePasswordRequest");

// Category Request
const AddCategoryRequest = require("./CategoryRequest/AddCategoryRequest");
const UpdateCategoryRequest = require("./CategoryRequest/UpdateCategoryRequest");

// Coupon Request
const AddCouponRequest = require("./CouponRequest/AddCouponRequest");
const AddCouponRequest_Admin = require("./CouponRequest/AddCouponRequest_Admin")
const UpdateCouponRequest = require("./CouponRequest/UpdateCouponRequest");

// Driver Request
const AddDriverRequest = require("./DriverRequest/AddDriverRequest");
const UpdateDriverRequest = require("./DriverRequest/UpdateDriverRequest");

// Food Request
const AddFoodRequest = require("./FoodRequest/AddFoodRequest");
const UpdateFoodRequest = require("./FoodRequest/UpdateFoodRequest");
// const AddOptionLabelRequest = require("./FoodRequest/AddOptionLabelRequest");
// const UpdateOptionLabelRequest = require("./FoodRequest/UpdateOptionLabelRequest");
// const AddOptionRequest = require("./FoodRequest/AddOptionRequest");
// const UpdateOptionRequest = require("./FoodRequest/UpdateOptionRequest");

// Store Request
const AddStoreRequest = require("./StoreRequest/AddStoreRequest");
const UpdateStoreRequest = require("./StoreRequest/UpdateStoreRequest");

// User Request
const UpdateUserRequest = require("./UserRequest/UpdateUserRequest");

module.exports = {
  AddUserRequest,
  LoginRequest,
  AddDriverRequest,
  UpdateDriverRequest,
  UpdateUserRequest,
  AddCategoryRequest,
  UpdateCategoryRequest,
  AddFoodRequest,
  UpdateFoodRequest,
  AddStoreRequest,
  LoginStoreRequest,
  UpdateStoreRequest,
  UpdatePasswordRequest,
  AddCouponRequest,
  AddCouponRequest_Admin,
  UpdateCouponRequest
};
