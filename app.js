
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var index = require('./routes/index');
var text = require('./routes/text');
var piggy= require('./routes/piggy');
var list = require('./routes/list');
var feed = require('./routes/feed');
var archive = require('./routes/archive');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
// app.engine('handlebars', handlebars({defaultLayout: 'application'}));

app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/text', index.text_page);
app.get('/feed', index.feed_page);
app.get('/index', feed.index_page);
app.get('/index', list.index_page);
app.post('/submit_text', text.create);
app.post('/submit_detail', piggy.submit_detail);
app.post('/list',list.showlist );
// Example route
// app.get('/users', user.list);
//app.get('/handlebar' you want to link to, route-js.function)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
