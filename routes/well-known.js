// dependencies
const express = require('express');
const router = express.Router();

router.get('/security.txt', (req, res) => {
	res.sendFile('/public/other/security.txt', {root: __dirname + "/../"});
});

module.exports = router;
