// Auth Request
const AddUserRequest = require("./AuthRequest/AddUserRequest");
const LoginRequest = require("./AuthRequest/LoginRequest");
const LoginStoreRequest = require("./AuthRequest/LoginStoreRequest");
const UpdatePasswordRequest = require("./AuthRequest/UpdatePasswordRequest");
const ResendEmailRequest = require("./AuthRequest/ResendEmailRequest");
const UpdateStatusRequest = require("./AuthRequest/UpdateStatusRequest");

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

// Store Request
const AddStoreRequest = require("./StoreRequest/AddStoreRequest");
const UpdateStoreRequest = require("./StoreRequest/UpdateStoreRequest");

// Order Request
const AddOrderRequest = require("./OrderRequest/AddOrderRequest");
const AddOrderItemRequest = require("./OrderRequest/AddOrderItemRequest");
const UpdateOrderDriverRequest = require("./OrderRequest/UpdateOrderDriverRequest");
const UpdateOrderStatus = require("./OrderRequest/UpdateOrderStatus");
const UpdateOrderRating = require("./OrderRequest/UpdateOrderRating");

// User Request
const UpdateUserRequest = require("./UserRequest/UpdateUserRequest");

module.exports = {
  AddUserRequest,
  LoginRequest,
  UpdateStatusRequest,
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
  UpdateCouponRequest,
  AddOrderRequest,
  AddOrderItemRequest,
  UpdateOrderDriverRequest,
  UpdateOrderStatus,
  UpdateOrderRating,
  ResendEmailRequest
};
