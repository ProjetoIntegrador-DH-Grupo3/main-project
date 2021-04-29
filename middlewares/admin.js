module.exports = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user == undefined || req.session.user.admin == 1) {
    return res.render("error404", { url: req.url });
  }

  return next();
};
