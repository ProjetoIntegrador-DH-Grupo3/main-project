const burguers = require("../database/burguers.json");
const { Menu } = require("../sequelize/models");

const menuController = {
  index: (_req, res) => {
    res.render("menu", { burguers });
  },
};

module.exports = menuController;
