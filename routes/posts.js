function newPost(postImg, postText){
	return { img: 'images/'+postImg, text: postText }
}

var indexPosts = [
	newPost('vaffel.png', 'Her finnes info om vaffler!'),
	newPost('kjeks.jpg', 'Her finnes info om kjeks!'),
	newPost('drops.jpg', 'Her finnes info om drops!'),
	newPost('kake.jpg', 'Her finnes info om kaker!')
];

var wafflePosts = [
	newPost('vaffel.png', 'Megagod oppskrift på vaffler!!1 :)'),
	newPost('vaffel.png', 'Enda en oppskrift..?')
];


var cookiePosts = [
	newPost('kjeks.jpg', 'Megagod oppskrift på kjeks!!1 :)'),
	newPost('kjeks.jpg', 'Enda en oppskrift..?')
];


var candyPosts = [
	newPost('drops.jpg', 'Megagod oppskrift på drops!!1 :)'),
	newPost('drops.jpg', 'Enda en oppskrift..?')
];


var cakePosts = [
	newPost('kake.jpg', 'Megagod oppskrift på kake!!1 :)'),
	newPost('kake.jpg', 'Enda en oppskrift..?')
];


module.exports = {
	indexPosts,
	wafflePosts,
	cookiePosts,
	candyPosts,
	cakePosts
};
