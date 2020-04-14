const mongoose = require('mongoose');

const post_schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	posted_at:
	{
		type: Date,
		required: true
	},
	views: {
		type: Number,
		required: true
	},
	uid: {
		type: String,
		required: true
	},
	content: {
		type: String,
		get: (data) => { try { return JSON.parse(data); } catch (e) { return data; } },
		set: (data) => { return JSON.stringify(data); }
	}
}, { collection: 'posts' });

post_schema.methods.to_display_format = function() {

	return {
		title: this.title,
		date: this.posted_at,
		views: this.views,
		link: "/" + this.uid
	}

}

module.exports = mongoose.model("post", post_schema);