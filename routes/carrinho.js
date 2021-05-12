const express = require("express");
const router = express.Router();

const carrinhoController = require("../controllers/carrinhoController");
const auth = require("../middlewares/auth");

router.get("/", carrinhoController.index);
router.post("/", carrinhoController.store);
router.post("/delete/:id", carrinhoController.delete);
router.post("/save", auth, carrinhoController.save);

module.exports = router;
