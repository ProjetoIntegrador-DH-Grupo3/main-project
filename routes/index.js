const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router.get("/contato", indexController.contato);

router.get("/sobre", indexController.sobre);

<<<<<<< HEAD
=======
// router.get("/registro", indexController.registro);
>>>>>>> ab32a5ea7f88d040c146c4d00dfa1830189b3cda
router.get("/cadastro", indexController.cadastro);

// router.get("/login", indexController.create);
// router.post("/login", indexController.store);

router.get("/registro", indexController.registro);
// router.post("/registro", indexController.store);

module.exports = router;
