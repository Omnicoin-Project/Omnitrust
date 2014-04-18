var mongoose = require('mongoose');

var TrustSchema = new mongoose.Schema({
	hfuid: {
		type: Number,
		unique: true,
		required: true
	},
	omcaddr: {
		type: String,
		unique: false,
		required: true
	}
});

module.exports = mongoose.model('Trust', TrustSchema);