const production = {

};

const developement = {

	http: {
		port: 8080
	}
	
};

module.exports = process.env.NODE_ENV == 'production' ? production : developement;
