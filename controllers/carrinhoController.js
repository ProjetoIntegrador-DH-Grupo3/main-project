const { Produtos } = require("../sequelize/models");

const carrinhoController = {
  index: (req, res) => {
    const { produto, user } = req.session;

    if (produto == undefined || produto == "") {
      res.render("carrinhoVazio", { user });
    }
    if (produto) {
      res.render("carrinho", { produto, user });
    }
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
    if (req.session.produto) {
      return res.redirect("carrinho");
    }
    if (req.session.produto == undefined || req.session.produto == "") {
      return res.render("carrinhoVazio");
    }
  },
  delete: async (req, res) => {
    const itemId = req.params.id;
    const { produto } = req.session;
    const item = await produto.filter((p) => p.id != itemId);
    console.log(item);
    req.session.produto = item;
    res.redirect("/carrinho");
  },
}

module.exports = carrinhoController;
