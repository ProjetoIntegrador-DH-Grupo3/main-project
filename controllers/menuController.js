const burguers = require("../database/burguers.json");

const menuController = {
  index: (_req, res) => {
    res.render("menu", { burguers });
  },
};

module.exports = menuController;
