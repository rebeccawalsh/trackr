
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var add = require('./routes/add');
var signup = require('./routes/signup')
var home = require('./routes/home')
var diary = require('./routes/diary')
var addphoto = require('./routes/addphoto')
var compare = require('./routes/compare')
var compareleft = require('./routes/compareleft')
var compareright = require('./routes/compareright')
var reminders = require('./routes/reminders')
var adddiary = require('./routes/adddiary')
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
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
app.get('/add', add.addFriend);
app.get('/signup', signup.view);
app.get('/home', home.view);
app.get('/diary', diary.view);
app.get('/addphoto', addphoto.view);
app.get('/compare', compare.view);
app.get('/compareleft', compareleft.view);
app.get('/compareright', compareright.view);
app.get('/reminders', reminders.view);
app.get('/adddiary', adddiary.addDiary);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
