var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var routes = require('./routes/index');
var username = require('./routes/username');
var home =require('./routes/home');
var office = require('./routes/office');
//var users = require('./routes/users');
var connection = require('./routes/connection');
var login = require('./routes/login');
var order = require('./routes/order');
var app = express();
var product = require('./routes/products');
var register=require('./routes/register');
// view engine setup
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.

//app.use(app.router);

/*app.use('/', routes);
app.use('/connection', connection);*/
app.get('/connection', connection.connection);
app.get('/index',routes.index);

app.get('/username/:username/decks',username.username);
app.get('/login',login.login);
app.get('/home',home.home);
app.get('/product',home.home2);
app.get('/office',office.officepage);
app.get('/offices',office.office);
app.get('/productinfo',home.info);
app.get('/productsurl',home.inf);
app.get('/productinformation',home.information);
app.post('/ordersubmit',order.submitorder);
app.get('/userregister',register.register);
app.post('/register',register.registeruser);
app.get('/orderdetails',order.orderdetails);
app.get('/orderpage',order.orderpage);
app.get('/admin',register.adminregister);
app.post('/adminregister',register.registeradmin);
app.post('/productsubmit',product.registerproduct);
app.get('/addproduct',routes.addproduct);
app.get('/getproduct',home.getproduct);
app.get('/getproductpage',routes.getproductpage);
app.get('/deleteproduct',product.deleteproduct);
app.get('/adminhome',routes.adminhome);
app.get('/adminorder',order.adminorder);
app.get('/adminlogin',login.adminlogin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
module.exports = app;
