const express = require("express");

const { UserController } = require(appRoot + "/controllers");

const router = express.Router();

router.get("/", UserController.index);

module.exports = router;
