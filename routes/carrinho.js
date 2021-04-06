const express = require("express");
const router = express.Router();

const carrinhoController = require("../controllers/carrinhoController");

router.get("/", carrinhoController.index);

module.exports = router;
