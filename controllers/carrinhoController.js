const { Produtos } = require("../sequelize/models");

const carrinhoController = {
  index: (req, res) => {
    const { produto } = req.session;
    res.render("carrinho", { produto });
  },
  store: async (req, res) => {
    const { produtoId, quantidade } = req.body;
    const { produto } = req.session;
    console.log(req.body);

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
  delete: async (req, res) => {
    const itemId = req.params.id;
    const { produto } = req.session;
    const item = await produto.filter((p) => p.id != itemId);
    console.log(item);
    req.session.produto = item;

    console.log(req.session.produto);

    res.redirect("/carrinho");
  },
};

module.exports = carrinhoController;
