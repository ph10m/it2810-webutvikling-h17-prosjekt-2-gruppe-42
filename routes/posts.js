function newPost(postImg, postText){
	return { img: 'images/'+postImg, text: postText };
}

var waffleText = "Har du prøvd våre nydelige vaffler? Det sies de skapte fred i Nord-Korea etter 2000 år med konflikter. Dette er bare en myte, men det som er sikkert er at de virkelig får blodet til å bruse. Dette er forsåvidt også en myte. Jeg kan derimot garantere at de er veldig gode! Selv om dette er en subjektiv sak såklart, dersom du ikke er noe spesielt glad i vaffler synes du kanskje ikke de er noe særlig god. Vel, jeg synes ihvertfall de er gode. Kun nystekt da. Ingen liker gamle vaffer.";

var cookieText = "Hva er vel bedre enn nystekte kjeks til kaffen! Det var kanskje en dårlig intro til denne posten. Det finnes jo mange som ikke liker kaffe også, man burde vel kanskje ikke utelate de. Eller, bryr jeg meg? Nei æsj, folk som ikke liker kaffe fortjener ikke kjeksene våre. De er så gode! Så bare for å være klar: Ikke trykk inn på denne artikkelen om du ikke  liker  kaffe. Kun for kaffeelskere.";


var cakeText = "Dette er den ultimate kaken, både til hverdags og fest. Du tenker kanskje \\\"hm, rart jeg ikke har smakt den kaken da\\\". Jeg har da dårlige nyheter til deg. Om moren din aldri laget deg denne kaken på alle de bursdagene du har hatt til nå i livet ditt er hun rett og slett ikke glad i deg. Fortvil derimot ikke! Du kan trøstespise denne kaken! Den ble kåret til årets trøstespisekake i 1945 av Vidkun Quisling selv.";


var candyText = "Våre drops er de beste dropsene du får tak i i hele Norge. Faktisk i hele verden. Nei, universet! De er ihvertfall gode. 9 av 10 tannleger sier at de kan erstatte både tannkrem, tanntråd og fluorskyll. Neida. Joda. Seriøst. Du vil ikke bry deg om de råtne tennene du får når du får smake dropsene. Du kommer til å sitte tannløs som åtti-åring og ikke angre på noe. Eller jo, du kommer til å angre på at du ikke spiste flere.";



var indexPosts = [
	newPost('vaffel.png', 'Har du prøvd våre nydelige vaffler? Det sies de skapte fred i Nord-Korea etter 2000 år med konflikter. Dette er bare en myte, men det som er sikkert er at de virkelig får blodet til å bruse. Dette er forsåvidt også en myte. Jeg kan derimot garantere at de er veldig gode! Selv om dette er en subjektiv sak såklart, dersom du ikke er noe spesielt glad i vaffler synes du kanskje ikke de er noe særlig gode. Vel, jeg synes ihvertfall de er gode. Kun nystekt da. Ingen liker gamle vaffer.'),
	newPost('kjeks.jpg', 'Hva er vel bedre enn nystekte kjeks til kaffen! Det var kanskje en dårlig intro til denne posten. Det finnes jo mange som ikke liker kaffe også, man burde vel kanskje ikke utelate de. Eller, bryr jeg meg? Nei æsj, folk som ikke liker kaffe fortjener ikke kjeksene våre. De er så gode! Så bare for å være klar: Ikke trykk inn på denne artikkelen om du ikke  liker  kaffe. Kun for kaffeelskere.'),
	newPost('drops.jpg', 'Våre drops er de beste dropsene du får tak i i hele Norge. Faktisk i hele verden. Nei, universet! De er ihvertfall gode. 9 av 10 tannleger sier at de kan erstatte både tannkrem, tanntråd og fluorskyll. Neida. Joda. Seriøst. Du vil ikke bry deg om de råtne tennene du får når du får smake dropsene. Du kommer til å sitte tannløs som åtti-åring og ikke angre på noe. Eller jo, du kommer til å angre på at du ikke spiste flere.'),
	newPost('kake.jpg', 'Dette er den ultimate kaken, både til hverdags og fest. Du tenker kanskje "hm, rart jeg ikke har smakt den kaken da". Jeg har da dårlige nyheter til deg. Om moren din aldri laget deg denne kaken på alle de bursdagene du har hatt til nå i livet ditt er hun rett og slett ikke glad i deg. Fortvil derimot ikke! Du kan trøstespise denne kaken! Den ble kåret til årets trøstespisekake i 1945 av Vidkun Quisling selv.')
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
