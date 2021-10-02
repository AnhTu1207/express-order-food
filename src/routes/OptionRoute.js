const express = require("express");

const { OptionController } = require(appRoot + "/controllers");

const router = express.Router();

router.get("/", OptionController.index);
router.get("/getById/:id", OptionController.getById);
router.post("/", OptionController.store);
router.put("/:id", OptionController.update)
router.delete("/:id", OptionController.delete)

module.exports = router;
