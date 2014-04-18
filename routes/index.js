
/*
 * GET home page.
 */

var crypto = require('crypto');
var rpc = require('node-json-rpc');
var rpcOpts = {
	port: 43555,
	host: '127.0.0.1'
}

crypto.randomBytes(64, function(ex,buf) {
	var cstring = buf.toString('hex');
})

exports.index = function(req, res){
	if(!req.session.challengeString) {
		req.session.challengeString = cstring;
	}
	res.render('index', { 
		title: 'Express', 
		cstring: req.session.challengeString 
	});
};