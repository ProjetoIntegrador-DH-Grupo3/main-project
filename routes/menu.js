const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menuController");

router.get("/", menuController.index);
router.post("/", menuController.store);

module.exports = router;
