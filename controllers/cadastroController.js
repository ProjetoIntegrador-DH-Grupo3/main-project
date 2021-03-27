const { Produtos } = require("../sequelize/models");

cadastroController = {
  index: (req, res) => {
    res.render("cadastro");
  },
  store: async (req, res) => {
    //fazendo a requisição da pagina
    const { file } = req;
    const { nome, descricao, preco } = req.body;
    const dataAtual = new Date();

    //cadastrando no BD
    const produtos = await Produtos.create({
      nome: nome,
      imagem: file.filename,
      descricao: descricao,
      preco: preco,
      createdAt: dataAtual,
      updatedAt: dataAtual,
    });

    if (!produtos) {
      fs.unlinkSync(file.path);
      return res.send("erro ao criar o produto");
    }

    return res.redirect("/");
  },
};

module.exports = cadastroController;
