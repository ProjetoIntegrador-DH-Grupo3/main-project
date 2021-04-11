const { Produtos } = require("../sequelize/models");

const express = require("express");

const carrinhoController = {
  index: async (_req, res) => {
    const produtos = await Produtos.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("carrinho", { produtos });
  },
};

module.exports = carrinhoController;
