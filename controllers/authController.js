const { Usuario } = require("../sequelize/models");
const bcrypt = require("bcryptjs");

const authController = {
  index: (_req, res) => {
    res.render("login");
  },

  store: async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (!usuario) {
      return res.send("Usuario inválido");
    }
    const resultado = bcrypt.compareSync(password, usuario.senha);
    if (!resultado) {
      return res.send("senha inválido");
    }

    req.session.user = {
      id: usuario.id,
      nome: usuario.email,
      admin: usuario.permissao,
    };
    console.log(req.session.user.admin);

    return res.redirect("/");
  },
};

module.exports = authController;
