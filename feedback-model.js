var mongoose = require('mongoose');

var FeedbackSchema = new mongoose.Schema({
	hfuid: {
		type: Number,
		unique: false,
		required: true
	},
	recuid: {
		type: Number,
		unique: false,
		required: true
	},
	rating: {
		type: String,
		unique: false,
		required: true
	},
	comment: {
		type: String,
		unique: false,
		required: true
	}
});

module.exports = mongoose.model('Feedback', FeedbackSchema);