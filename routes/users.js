var express = require("express");
var router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController.login);

module.exports = router;
