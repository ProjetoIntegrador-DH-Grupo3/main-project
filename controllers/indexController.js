const express = require("express");

const indexController = {
  index: (req, res) => {
    const { user } = req.session;
    const { session } = req;
    res.render("index", { user, session });
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
