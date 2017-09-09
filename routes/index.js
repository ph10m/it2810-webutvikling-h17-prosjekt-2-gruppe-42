var express = require('express');
var router = express.Router();
var pagePosts = require('./posts');

// Set up a new route with .ejs render and title of page
function new_route(path, title){
  router.get('/'+path, function(req, res, next) {
    res.render(path, { Title: title });
  });
}

// Set up a posts page to render on top of dynamic.ejs
// all content in the posts is found in routes/posts.js
// which are stored in a json format.
function new_post_page(path, title, posts){
  router.get('/'+path, function(req, res, next) {
    res.render('dynamic', {
			Title: title,
			Posts: posts
		});
  });
}

new_post_page('', 'Kaffekos', pagePosts.indexPosts);
new_post_page('waffle', 'Vaffel', pagePosts.wafflePosts);
new_post_page('cake', 'Kake', pagePosts.cakePosts);
new_post_page('cookie', 'Kjeks', pagePosts.cookiePosts);
new_post_page('candy', 'Godteri', pagePosts.candyPosts);

new_route('about', 'Om oss');


module.exports = router;
