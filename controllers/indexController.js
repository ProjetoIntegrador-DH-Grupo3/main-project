const express = require("express");

const indexController = {
  index: (req, res) => {
    const { user } = req.session;
    res.render("index", { user });
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
};

module.exports = indexController;
