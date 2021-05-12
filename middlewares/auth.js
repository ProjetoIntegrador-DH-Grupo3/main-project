module.exports = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user == undefined) {
    return res.send("precisa estar logado");
  }

  return next();
};
