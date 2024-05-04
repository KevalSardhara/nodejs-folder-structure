var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require("./database/mongodb.database.js");
const cors = require("cors");

var app = express();

dotenv.config({
  path: './.env'
})


const { userRouter } = require('./routes/user.router.js');


app.use(cors({
  origin: ["http://localhost:5000", process.env.CORS_ORIGIN], // make here for the cors origin to allow the third party fruntend server url to allow
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

connectDB(process.env.MONGO_DB).then((db) => {
  console.log("mongoodb connected", db.connection.host); // this is an localhost connection here to setup fully functionality to developed it.
}).catch((error) => {
  console.log("Error in connecting to database", error);
});

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); // make log here

// app.use(express.json());
app.use(express.json({
  limit : "16kb"
}));

app.use(express.urlencoded({ extended: false })); // url encoded for the make proper syntex here
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/api/v1/user', userRouter);

app.get("/", function(req,res, next){
  // res.send("run");
  res.render('index');
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// export default {
//   JWT_SECRET : "<secret>",
//   EMAIL: "steve.franecki@ethereal.email", // testing email & password
//   PASSWORD : "sMf46xCzrvdrxvuagc",
//   ATLAS_URI: "<MONGODB_ATLAS_URI>"
// }

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/user", userRouter);
// app.use("/data", oredrDataRouter);