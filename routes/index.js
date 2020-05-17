const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index.hbs', { pageName: 'homepage' });
});

router.get('/about', (req, res) => {
	res.render('about.hbs', { pageName: 'about' });

});

router.get('/contact', (req, res) => {
	res.render('contact.hbs', { pageName: 'contact' });

});

router.get('/key.asc', (req, res) => {
	res.sendFile('/public/assets/key.txt', {root: __dirname + "/../"});
});

router.get('/resume', (req, res) => {
	res.sendFile('/public/assets/resume.pdf', {root: __dirname + "/../"});
});

module.exports = router;
