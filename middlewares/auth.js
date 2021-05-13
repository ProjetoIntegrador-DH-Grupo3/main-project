const Swal = require("sweetalert2");

module.exports = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user == undefined) {
    res.send("erro");
  }

  return next();
};
