var express = require('express');
var router = express.Router();

const burguers = require('../database/burguers.json');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { burguers });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre' });
}); 

module.exports = router;
