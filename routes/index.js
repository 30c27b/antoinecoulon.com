const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index.hbs', { layout: false });
});

router.get('/about', (req, res) => {
	res.render('about.hbs', { layout: false });

});

router.get('/contact', (req, res) => {
	res.render('contact.hbs', { layout: false });

});

router.get('/pubkey.asc', (req, res) => {
	res.sendFile('/public/other/pubkey.txt', {root: __dirname + "/../"});
});

module.exports = router;
