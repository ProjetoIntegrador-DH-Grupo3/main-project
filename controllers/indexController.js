const express = require("express");
const router = express.Router();

const indexController = {
  index: (_req, res) => {
    res.render("index", { title: "home" });
  },
  contato: (req, res) => {
    res.render("contato");
  },
  sobre: (_req, res) => {
    res.render("sobre");
  },
  cadastro: (_req, res) => {
    res.render("cadastro");
  },
<<<<<<< HEAD
  registro: (_req, res) => {
    res.render("registro");
  },
=======
  // registro: (req, res) => {
  //   res.render("registro");
  // },
>>>>>>> ab32a5ea7f88d040c146c4d00dfa1830189b3cda
};

module.exports = indexController;
