const Swal = require("sweetalert2");

module.exports = (req, res, next) => {
  const { user } = req.session;
  if (user == undefined) {
    res.render("pedidoErro", { user });
  }

  return next();
};
