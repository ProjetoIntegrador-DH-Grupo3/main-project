const { Produtos, PedidosDetalhe, Pedidos } = require("../sequelize/models");
const menuController = {
  index: async (_req, res) => {
    const menu = await Produtos.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.render("menu", { menu });
  },
  store: async (req, res) => {
    const pedidosDetalhe = await PedidosDetalhe.findAll({
      include: [
        {
          model: Produtos,
          required: true,
        },
        {
          model: Pedidos,
          required: true,
        },
      ],
    });

    const { adicionar } = req.body;
    const { user } = req.session;

    if (!adicionar) {
      const pedidos = await Pedidos.create({
        usuario_id: user,
        quantidade: 1,
      });

      res.redirect("/carrinho");
    }
  },
};
module.exports = menuController;
