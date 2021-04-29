module.exports = (req, res, next) => {
  if (req.session.user.admin == 1) {
    return  res.render("error404", { url:req.url});
  }

  return next();
};
