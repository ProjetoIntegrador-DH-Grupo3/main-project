const { Produtos, Menu } = require("../sequelize/models");
const burguers = require("../database/burguers.json");

const menuController = {
  index: async (_req, res) => {
    const produtos = await Produtos.findAll();
    console.log(produtos);
    res.render("menu", { produtos });
  },
};

module.exports = menuController;
