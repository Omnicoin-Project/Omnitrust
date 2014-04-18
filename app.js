
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
//var sslPrivKey = fs.readFileSync(path.join('ssl/','server.key'), 'utf8');
//var sslCert = fs.readFileSync(path.join('ssl/', 'server.crt'), 'utf8');
//var httpsDetails = { key: sslPrivKey, cert: sslCert };
//TODO Initialize server with SSL reqs.
var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('s-port', process.env.PORT || 443);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({
	secret: 'Jcamf9eLGRHl$!536zwxW$yPE_ppgaNdBd&25#Di223u%#K6wS'
}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

//https.createServer(httpsDetails,app).listen(app.get('s-port'), function(){
//	console.log('Express secure server listening on port ' + app.get('s-port'));
//});