const express = require("express");

const { AddOptionRequest, UpdateOptionRequest } = require(appRoot + "/requests");
const router = express.Router();

const { OptionController } = require(appRoot + "/controllers");

router.get("/", OptionController.index);
router.get("/show/:id", OptionController.show);
router.post("/", AddOptionRequest, OptionController.store);
router.put("/:id", UpdateOptionRequest, OptionController.update)
router.delete("/:id", OptionController.delete)

module.exports = router;
