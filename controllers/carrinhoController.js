const express = require("express");

const carrinhoController = {
  index: (_req, res) => res.render("carrinho"),
};

module.exports = carrinhoController;
