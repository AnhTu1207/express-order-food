const express = require("express");

const { AddOptionLabelRequest, UpdateOptionLabelRequest } = require(appRoot + "/requests");
const router = express.Router();

const { OptionLabelController } = require(appRoot + "/controllers");

router.get("/", OptionLabelController.index);
router.get("/show/:id", OptionLabelController.show);
router.post("/", AddOptionLabelRequest, OptionLabelController.store);
router.put("/:id", UpdateOptionLabelRequest, OptionLabelController.update)
router.delete("/:id", OptionLabelController.delete);

module.exports = router;
