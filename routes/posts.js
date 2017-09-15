function newPost(postImg, postText){
	return { img: 'images/'+postImg, text: postText };
}

var waffleText = "Lorem ipsum dolor sit amet, ea discere petentium salutatus mea, id est fugit graeco, an porro ornatus his. Ex ornatus delicata torquatos qui, nominati petentium vim in. Mel ea cetero dolores intellegebat. Ei consul lobortis vim, mei te case eruditi, cu epicuri adipiscing sea. Duis dicit molestiae id eam, duo id partem detracto reprehendunt. Solet tempor omnium eos ei, alia commodo ad cum, voluptua quaestio theophrastus eu eos. Eam ex timeam fastidii petentium, nulla deterruisset per ex, graeci vidisse electram no duo. Per an rebum lucilius, vim nisl ullamcorper ut, in ipsum legimus sed. Te quod aliquando vim, ei vim everti tacimates.";

var cookieText = "Lorem ipsum dolor sit amet, ea discere petentium salutatus mea, id est fugit graeco, an porro ornatus his. Ex ornatus delicata torquatos qui, nominati petentium vim in. Mel ea cetero dolores intellegebat. Ei consul lobortis vim, mei te case eruditi, cu epicuri adipiscing sea. Duis dicit molestiae id eam, duo id partem detracto reprehendunt. Solet tempor omnium eos ei, alia commodo ad cum, voluptua quaestio theophrastus eu eos. Eam ex timeam fastidii petentium, nulla deterruisset per ex, graeci vidisse electram no duo. Per an rebum lucilius, vim nisl ullamcorper ut, in ipsum legimus sed. Te quod aliquando vim, ei vim everti tacimates.";


var cakeText = "Lorem ipsum dolor sit amet, ea discere petentium salutatus mea, id est fugit graeco, an porro ornatus his. Ex ornatus delicata torquatos qui, nominati petentium vim in. Mel ea cetero dolores intellegebat. Ei consul lobortis vim, mei te case eruditi, cu epicuri adipiscing sea. Duis dicit molestiae id eam, duo id partem detracto reprehendunt. Solet tempor omnium eos ei, alia commodo ad cum, voluptua quaestio theophrastus eu eos. Eam ex timeam fastidii petentium, nulla deterruisset per ex, graeci vidisse electram no duo. Per an rebum lucilius, vim nisl ullamcorper ut, in ipsum legimus sed. Te quod aliquando vim, ei vim everti tacimates.";


var candyText = "Lorem ipsum dolor sit amet, ea discere petentium salutatus mea, id est fugit graeco, an porro ornatus his. Ex ornatus delicata torquatos qui, nominati petentium vim in. Mel ea cetero dolores intellegebat. Ei consul lobortis vim, mei te case eruditi, cu epicuri adipiscing sea. Duis dicit molestiae id eam, duo id partem detracto reprehendunt. Solet tempor omnium eos ei, alia commodo ad cum, voluptua quaestio theophrastus eu eos. Eam ex timeam fastidii petentium, nulla deterruisset per ex, graeci vidisse electram no duo. Per an rebum lucilius, vim nisl ullamcorper ut, in ipsum legimus sed. Te quod aliquando vim, ei vim everti tacimates.";



var indexPosts = [
	newPost('vaffel.png', 'En kort tekst om oppskriften'),
	newPost('kjeks.jpg', 'En kort tekst om oppskriften'),
	newPost('drops.jpg', 'En kort tekst om oppskriften'),
	newPost('kake.jpg', 'En kort tekst om oppskriften')
];

var wafflePosts = [
	newPost('vaffel.png', waffleText)
];


var cookiePosts = [
	newPost('kjeks.jpg', cookieText),
];


var candyPosts = [
	newPost('drops.jpg', candyText),
];


var cakePosts = [
	newPost('kake.jpg', cakeText),
];

exports.indexPosts = indexPosts;
exports.wafflePosts = wafflePosts;
exports.cookiePosts = cookiePosts;
exports.candyPosts = candyPosts;
exports.cakePosts = cakePosts;
