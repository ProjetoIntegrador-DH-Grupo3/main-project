module.exports = (req, res, next) => {
  if (req.session.user.admin == 1) {
    return res.send("Você não tem acesso");
  }

  return next();
};
