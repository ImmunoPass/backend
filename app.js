var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
var indexRouter = require('./infra/http/routes/index');
var config = require('./config/config')
var app = express();
var path = require("path");

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// logger setup
app.use(logger(':date[iso] :method :url :status :response-time ms - :res[content-length] '))

// set app secret
app.set('secret', config.secret)

// bodyparser setup
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: false, parameterLimit: 2000}))

// json validation
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(400).send(
      {
        code: '400',
        data: {
          message: 'Invalid JSON Object',
          errcode: 'INV'
        }
      })
  } else {
    next()
  }
})
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// header validation
app.use(helmet())

// response compression
app.use(compression())

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// DIRECT EXIT handler

function killProcess () {
  if (process.exitTimeoutId) {
    return 
  }

  process.exitTimeoutId = setTimeout(process.exit, 2000)
  console.log('process will exit in 5 seconds')
}

process.on('SIGTERM', killProcess)
process.on('SIGINT', killProcess)

process.on('uncaughtException', function (e) {
  console.log('[uncaughtException] app will be terminated: ', e.stack)
  killProcess()
})

console.log('App is running')
console.log('Process PID :', process.pid)

process.stdin.resume()

module.exports = app 
