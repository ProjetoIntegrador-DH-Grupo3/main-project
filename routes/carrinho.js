const express = require("express");
const router = express.Router();

const carrinhoController = require("../controllers/carrinhoController");

router.get("/", carrinhoController.index);
router.post("/", carrinhoController.store);
router.post("/delete/:id", carrinhoController.delete);

module.exports = router;
