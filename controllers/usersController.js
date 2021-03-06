const { Usuario } = require("../sequelize/models");
const bcrypt = require("bcryptjs");

const usersController = {
  index: (req, res) => {
    const { user } = req.session;
    res.render("auth/registro", { user });
  },
  store: async (req, res) => {
    const { NomeUsuario, email, confirm_password, create_password } = req.body;

    if (confirm_password != create_password) {
      res.redirect("/users/registro/");
    } else {
      const dataAtual = new Date();

      const usuario = await Usuario.create({
        permissao: 1,
        nome: NomeUsuario,
        email: email,
        senha: bcrypt.hashSync(confirm_password, 8),
        created_at: dataAtual,
        update_at: dataAtual,
      });

      if (!usuario) {
        return res.send("Houve um erro ao salvar o usuario");
      }
      req.session.user = {
        id: usuario.id,
        nome: usuario.nome,
        admin: usuario.permissao,
      };
      res.redirect("/");
    }
  },
};

module.exports = usersController;
