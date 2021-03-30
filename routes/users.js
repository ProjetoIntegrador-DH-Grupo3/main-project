var express = require("express");
var router = express.Router();

const usersController = require("../controllers/usersController");
const authController = require("../controllers/authController");

router.get("/registro", usersController.index);
router.post("/registro", usersController.store);

router.get("/login", authController.index);
router.post("/login", authController.store);

module.exports = router;
