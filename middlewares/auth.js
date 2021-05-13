const Swal = require("sweetalert2");

module.exports = (req, res, next) => {
  if (user == undefined) {
    res.render("pedidoErro", { user });
  }

  return next();
};
