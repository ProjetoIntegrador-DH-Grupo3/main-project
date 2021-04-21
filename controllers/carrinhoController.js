const { Produtos } = require("../sequelize/models");

const express = require("express");

const carrinhoController = {
  index: async (req, res) => {
    const { produto } = req.session;
    res.render("carrinho", { produto });
  },
};

module.exports = carrinhoController;
