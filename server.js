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
app.use(express.urlencoded());
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
    res.locals.user = req.session.user;
    res.locals.userStories = req.session.userStories;
    
    next();
});

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    let _session=req.session.loggedin;
    res.render('pages/home');
    //res.render('components/VNdisplay');
});

app.get('/editchp/:storyId/:chapterNumber', function(req, res) {
  const dbConnect = dbo.getDb();

    let myquery = { 
        storyId: req.params.storyId, 
        number: req.params.chapterNumber
    };
    dbConnect
        .collection("chapters")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          var resChapter = result;
          delete resChapter["_id"];
          resChapter = JSON.parse(resChapter);
          res.render('pages/editChapter', {
            'chapter': resChapter,
            'storyId': req.params.storyId,
            'chapterNumber': req.params.chapterNumber
          });
        });
});

app.post('/editchp/:storyId/:chapterNumber', function(req, res) {
  const dbConnect = dbo.getDb();

    let myquery = { 
        storyId: req.params.storyId, 
        number: req.params.chapterNumber
    };
    dbConnect
        .collection("chapters")
        .updateOne(myquery, 
          { $set: JSON.parse(req.body.chapter) },
          { upsert: true }
        );
    res.redirect(`/editchp/${req.params.storyId}/${req.params.chapterNumber}`);
});

app.get('/stories', function(req, res) {
    const dbConnect = dbo.getDb();

  dbConnect
    .collection("stories")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.render('pages/stories', {'storyList': result});
    });
  
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.post('/login', function(req, res) {
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
          req.session.name = result.name;
          req.session.user = JSON.stringify(result);
          req.session.userStories = JSON.stringify(result['library']);

          let returnTo = '/'
          if (req.session.returnTo) {
            returnTo = req.session.returnTo;
            delete req.session.returnTo;
          }

          res.redirect(returnTo);
          return;
        }
        else{
          res.send('Incorrect Password!');
          return;
        }
      });
});

app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.username = "";
  req.session.name = "";
  res.redirect("/");
});

app.get('/register', function(req, res) {
    res.render('pages/register');
});

app.post('/register', function(req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
      .collection("users")
      .insertOne(req.body);
    dbConnect
      .collection("users")
      .updateOne(req.body, 
        { $set: {library: []} },
        { upsert: true }
      )
      .then(result => {
        res.redirect('/login')
      });
});

app.get('/play/:urlName/:chapterNumber', function(req, res) {
    if(req.session.loggedin != true){
      req.session.returnTo = `/play/${req.params.urlName}/${req.params.chapterNumber}`;
      res.redirect('/login');
      return;
    }

    const dbConnect = dbo.getDb();
    let myquery = { 
      urlName: req.params.urlName
    };
    var getStoryId;
    dbConnect
      .collection("stories")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        getStoryId = result["id"];
        myquery = { 
          storyId: getStoryId, 
          number: req.params.chapterNumber
        };
        dbConnect
            .collection("chapters")
            .findOne(myquery, function (err, result) {
              if (err) throw err;
              res.render('pages/game', { 
                "chapter": result,
                "storyId": getStoryId,
                "urlName": req.params.urlName,
                "chapterNumber": req.params.chapterNumber
               });
        });
    });
});

app.listen(port, function() {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log(`Server is running on port: ${port}`);
});