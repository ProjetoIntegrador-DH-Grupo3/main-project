const { Produtos, Menu } = require("../sequelize/models");
const burguers = require("../database/burguers.json");

const menuController = {
  index: (_req, res) => {
    const menu = Menu.findAll({
      include: {
        model: Produtos,
        required: true,
      },
    });

    res.render("menu", { burguers });
  },
};

module.exports = menuController;
