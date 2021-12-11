const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the documents.
recordRoutes.route("/api/listAllStories").get(function (req, res) {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("stories")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

recordRoutes.route("/api/listAllUsers").get(function (req, res) {
  let db_connect = getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/api/story/:id").get(function (req, res) {
  let db_connect = getDb();
  let myquery = { id: req.params.id};
  db_connect
      .collection("stories")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

recordRoutes.route("/api/play/:urlName/:chapterNumber").get(function (req, res) {
    let db_connect = getDb();
    let myquery = { 
        urlName: req.params.urlName, 
        number: req.params.chapterNumber
    };
    db_connect
        .collection("chapters")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  module.exports = recordRoutes;