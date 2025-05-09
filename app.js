var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');

var loginRouter = require('./routes/login');
var mainRouter = require('./routes/main');
var recordRouter = require('./routes/record');
var cropsRouter = require('./routes/crops');
var checkRouter = require('./routes/check');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  expressSession({
    secret: "key",
    resave: true,
    saveUninitialized: true,
  })
)

app.use('/login', loginRouter);
app.use('/main', mainRouter);
app.use('/record', recordRouter);
app.use('/crops', cropsRouter);
app.use('/check', checkRouter);

app.get('/', (req, res)=>{
  if(req.session.user){
    res.redirect('/main');
  }else{
    res.redirect('/login');
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
