const express = require("express");
const router = express.Router();

const cadastroController = require("../controllers/cadastroController");
const upload = require("../sequelize/configs/upload");

router.get("/", cadastroController.index);

router.post("/", upload.single("imagem"), cadastroController.store);

module.exports = router;
