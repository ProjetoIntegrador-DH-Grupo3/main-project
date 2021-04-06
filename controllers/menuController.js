const { Produtos, Menu } = require("../sequelize/models");
const menuController = {
  index: async (_req, res) => {
    const produtos = await Produtos.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.render("menu", { produtos });
  },
};

module.exports = menuController;
