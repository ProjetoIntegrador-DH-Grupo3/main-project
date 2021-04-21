const { Produtos } = require("../sequelize/models");

const carrinhoController = {
  index: async (req, res) => {
    const { produto } = req.session;
    res.render("carrinho", { produto });
  },
  store: async (req, res) => {
    const { produtoId, quantidade } = req.body;
    const { produto } = req.session;

    let produtosAtualizados;

    const produtoExistente = produto.find((p) => p.id === produtoId);

    const produtoInfo = await Produtos.findByPk(produtoId);

    if (produtoExistente) {
      produtosAtualizados = produto.map((p) =>
        p.id === produtoId
          ? {
              ...p,
              quantidade: quantidade,
              preco: produtoInfo.preco * quantidade,
            }
          : p
      );
    }
    req.session.produto = produtosAtualizados;
    res.redirect("/carrinho");
  },
  delete: (req, res) => {},
};

module.exports = carrinhoController;
