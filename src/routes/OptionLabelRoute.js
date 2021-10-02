const express = require("express");

const { OptionLabelController } = require(appRoot + "/controllers");
const { RequireAuth } = require(appRoot + "/middlewares");

const router = express.Router();

router.get("/", OptionLabelController.index);
router.get("/getById/:id", OptionLabelController.getById);
router.post("/", OptionLabelController.store);
router.put("/:id", OptionLabelController.update)
router.delete("/:id", OptionLabelController.delete);

module.exports = router;
