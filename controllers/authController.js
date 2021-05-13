const { Usuario } = require("../sequelize/models");
const bcrypt = require("bcryptjs");

const authController = {
  index: (req, res) => {
    const { user } = req.session;
    res.render("auth/login", { user });
  },

  store: async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.render("auth/login", { error: true });
    }
    const resultado = bcrypt.compareSync(password, usuario.senha);
    if (!resultado) {
      return res.render("auth/login", { error: true });
    }

    req.session.user = {
      id: usuario.id,
      nome: usuario.nome,
      admin: usuario.permissao,
    };

    return res.redirect("/");
  },
};

module.exports = authController;
