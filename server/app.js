const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  graphqlHTTP = require('express-graphql'),
  graphqlSchema = require('./graphql/project'),
  mongoose = require('mongoose');

var app = express();

// connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {useNewUrlParser: true})
  .then(() => console.log(`Connected to DB`))
  .catch(err => console.error(err.message));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/graphiql', cors(),graphqlHTTP({
  rootValue: 'global',
  schema: graphqlSchema,
  graphiql: true
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
