const { Produtos, Menu } = require("../sequelize/models");
const menuController = {
  index: async (_req, res) => {
    const produtos = await Produtos.findAll();
    res.render("menu", { produtos });
  },
};

module.exports = menuController;
