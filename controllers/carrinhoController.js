const { Produtos, Pedidos } = require("../sequelize/models");

const carrinhoController = {
  index: (req, res) => {
    const { produto, user } = req.session;

    if (produto == undefined || produto == "") {
      res.render("carrinhoVazio", { user });
    }
    if (produto) {
      let totalCarinho = 0;
      produto.forEach((produtoInfo) => (totalCarinho += produtoInfo.preco));
      res.render("carrinho", { produto, user, totalCarinho });
    }
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

    if (req.session.produto) {
      return res.redirect("/carrinho/");
    }
    if (req.session.produto == undefined || req.session.produto == "") {
      return res.render("carrinhoVazio");
    }
  },
  delete: async (req, res) => {
    const itemId = req.params.id;
    const { produto } = req.session;
    const item = await produto.filter((p) => p.id != itemId);

    req.session.produto = item;
    res.redirect("/carrinho");
  },
  save: async (req, res) => {
    const { user } = req.session;
    const { totalCarrinho } = req.body;
    console.log(totalCarrinho);

    const pedido = await Pedidos.create({
      usuario_id: user.id,
      quantidade: totalCarrinho,
    });
    res.send(req.body);
  },
};

module.exports = carrinhoController;
