const { Produtos, Pedidos } = require("../sequelize/models");
const menuController = {
  index: async (_req, res) => {
    const produtos = await Produtos.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.render("menu", { produtos });
  },
  store: async (req, res) => {
    const { produtoId } = req.body;
    let { produto } = req.session;

    if (!produto) {
      produto = [];
    }

    let produtosAtualizados;

    const produtoExistente = produto.find((p) => p.id === produtoId);

    const produtoInfo = await Produtos.findByPk(produtoId);

    if (produtoExistente) {
      produtosAtualizados = produto.map((p) =>
        p.id === produtoId
          ? {
              ...p,
              quantidade: p.quantidade + 1,
              preco: p.preco + produtoInfo.preco,
            }
          : p
      );
    } else {
      produtosAtualizados = [
        ...produto,
        {
          id: produtoInfo.id.toString(),
          nome: produtoInfo.nome,
          imagem: produtoInfo.imagem,
          descricao: produtoInfo.descricao,
          preco: produtoInfo.preco,
          quantidade: 1,
        },
      ];
    }

    req.session.produto = produtosAtualizados;

    return res.redirect("/menu");
  },
};
module.exports = menuController;
