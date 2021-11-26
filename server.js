var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5003;
app.use(cors());
app.use(express.json());
// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
app.use('/public', express.static('public'));
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
const { response } = require('express');

// set the view engine to ejs
app.set('view engine', 'ejs');


//express session
var sess = {
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: true,
  cookie: {}
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = false;
}
app.use(session(sess));
app.use(function(req, res, next) {
  res.locals.loggedin = req.session.loggedin;
  console.log("logged in: "+res.locals.loggedin);
  next();
});

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    let _session=req.session.loggedin;
    res.render('pages/home');
    //res.render('components/VNdisplay');
});

app.get('/stories', function(req, res) {
  res.render('pages/stories');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/login', function(req, res) {
  res.render('pages/login');
});

app.post('/auth', function(req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("users")
    .findOne({$or: [{email: req.body.identifier}, {username: req.body.identifier}]}, function (err, result) {
      if (err) throw err;
      if(result===null){
        res.send('Account doesn\'t exist'+req.body.identifier);
        return;
      }
      else if (result.password==req.body.password){
        req.session.loggedin = true;
        req.session.username = result.username;
        res.redirect('/');
        return;
      }
      else{
        res.send('Incorrect Password!');
        return;
      }
    });
});

app.get('/register', function(req, res) {
  res.render('pages/register');
});

app.post('/register', function(req, res) {
  
});

app.listen(port, function() {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log(`Server is running on port: ${port}`);
})