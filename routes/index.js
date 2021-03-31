const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/contato", indexController.contato);

router.get("/sobre", indexController.sobre);

// router.get("/registro", indexController.registro);
router.get("/cadastro", indexController.cadastro);

module.exports = router;
