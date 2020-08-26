const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const config = require('./config.json');



const server = express();

server.engine('.hbs', exphbs({extname: '.hbs'}));
server.set('view engine', '.hbs');

server.use(express.static(path.join((process.cwd() + '/public'))));
server.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

server.use('/', require('./routes/index'));
server.use('/.well-known', require('./routes/well-known'));

server.use((req, res) => {
	res.render('notfound.hbs', {layout: false});
});

server.listen(config.port);
