
/*
 * GET home page.
 */

var crypto = require('crypto');

crypto.randomBytes(64, function(ex,buf) {
	var cstring = buf.toString('hex');
})

exports.index = function(req, res){
	if(!req.session.challengeString) {
		req.session.challengeString = cstring;
	}
	res.render('index', { title: 'Express' });
};