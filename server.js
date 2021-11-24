var express = require('express');
var app = express();
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

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
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


app.listen(port, function() {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log(`Server is running on port: ${port}`);
})