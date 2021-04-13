const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/contato", indexController.contato);

router.get("/sobre", indexController.sobre);

module.exports = router;
