# Setup
```npm install```
```npm start```

### To add new html files
add your file in ```views/yourfile.html```
add a route to your file in ```routes/yourfile.js```
- it should look like this:
```
var express = require('express');
var router = express.Router();

/* GET your page. */
router.get('/yourpage', function(req, res, next) {
  res.render('yourfile', { title: 'Title here' });
});

module.exports = router;
```
open ```app.js``` and go to the block at ```line 26```
add a new line: ```app.use('/yourpage', yourfile);```
