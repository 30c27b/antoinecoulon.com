const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', (req, res) =>{
	post.find({}, (err, posts) => {
		if (err) res.render('index.hbs', {msg: "cannot load posts"});
		else if (!posts.length) res.render('index.hbs', {msg: "nothing to see here; yet"});
		else res.render('index.hbs', {posts: posts.map(post => post.to_display_format())});
	});
});

router.get('/:post', (req, res) =>{
	res.send("wip");
});

module.exports = router;
