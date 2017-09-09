var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function new_route(path){
  router.get('/'+path, function(req, res, next) {
    res.render(path, { title: 'Title'});
  });
}
new_route('waffle');
new_route('cake');
new_route('cookie');
new_route('candy');
new_route('about');

module.exports = router;
