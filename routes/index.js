var express = require('express');
var router = express.Router();
var pagePosts = require('./posts');
var ingredients = require('../views/recipes/ingredients');
var instructions = require('../views/recipes/instructions');

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

function new_recipe_page(path, title, posts, ingr, inst, defaultPortions){
    router.get('/'+path, function(req, res, next) {
        res.render('recipes', {
            Title: title,
            Posts: posts,
            Ingredients: ingr,
			Instructions: inst,
			DefaultPortions: defaultPortions
        });
    });
}

new_post_page('', 'Kaffekos', pagePosts.indexPosts);

new_recipe_page('waffle', 'Vaffel', pagePosts.wafflePosts, ingredients.waffle, instructions.waffle, 3);

new_recipe_page('cake', 'Kake', pagePosts.cakePosts, ingredients.cake, instructions.cake, 12);

new_recipe_page('cookie', 'Kjeks', pagePosts.cookiePosts, ingredients.cookies, instructions.cookies, 8);

new_recipe_page('candy', 'Drops', pagePosts.candyPosts, ingredients.candy, instructions.candy, 10);

new_route('about', 'Om oss');


module.exports = router;
