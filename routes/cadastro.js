const express = require("express");
const router = express.Router();
const cadastroController = require("../controllers/cadastroController");
const upload = require("../sequelize/configs/upload");
const admin = require("../middlewares/admin");

router.get("/", admin, cadastroController.index);

router.post("/", admin, upload.single("img"), cadastroController.store);

module.exports = router;
