const { Usuario } = require("../sequelize/models");
const bcrypt = require("bcryptjs");

const usersController = {
  index: (_req, res) => res.render("registro"),
  store: async (req, res) => {
    const { email, confirm_password, create_password } = req.body;

    if (confirm_password != create_password) {
      res.redirect("login");
    } else {
      const dataAtual = new Date();

      const usuario = await Usuario.create({
        permissao: 0,
        nome: undefined,
        email: email,
        senha: bcrypt.hashSync(confirm_password, 8),
        created_at: dataAtual,
        update_at: dataAtual,
      });

      if (!usuario) {
        return res.send("Houve um erro ao salvar o usuario");
      }

      res.redirect("/");
    }
  },
};

module.exports = usersController;
