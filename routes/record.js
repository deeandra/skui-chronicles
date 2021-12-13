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
recordRoutes.route("/db/startStory").post(function (req, res) {
    const dbConnect = dbo.getDb();
    const userData = JSON.parse(req.body.user);
    dbConnect
      .collection("users")
      .findOne(
        {
          username: userData.username,
          email: userData.email,
          library: { $elemMatch: {storyId: req.body.storyId} }
        }, 
        function(err, result){
          if (err) throw err;
          if(!result){ 
            dbConnect
            .collection("users")
            .updateOne(
              {
                username: userData.username,
                email: userData.email
              },
              { $push: 
                { library: 
                  {
                    storyId: req.body.storyId,
                    lastCompletedChapter: 0,
                    currentNode: 1,
                    lastBg: "",
                    states: []
                  } 
                } 
              },
              function(err, result){
                dbConnect
                .collection("users")
                .findOne(
                  {
                    username: userData.username,
                    email: userData.email,
                    library: { $elemMatch: {storyId: req.body.storyId} }
                  }, 
                  function(err, result){
                    let obj = result.library.find(x => x.storyId==req.body.storyId);
                    res.json(JSON.stringify(obj));
                 });
              }
            );
          }else{
            let obj = result.library.find(x => x.storyId==req.body.storyId);
            if(parseInt(obj.lastCompletedChapter)>=parseInt(req.body.chapterNumber)){
              var filtered = obj.states.filter(function(value, index, arr){ 
                return parseInt(value.origin) <  parseInt(req.body.chapterNumber);
              });
              dbConnect
              .collection("users")
              .updateOne(
                {
                  username: userData.username,
                  email: userData.email,
                  library: { $elemMatch: {storyId: req.body.storyId} }
                },
                { $set: 
                    {
                      "library.$.lastCompletedChapter": (parseInt(req.body.chapterNumber)-1),
                      "library.$.currentNode": 1,
                      "library.$.states": filtered
                    } 
                },
                function(err, result){
                  dbConnect
                  .collection("users")
                  .findOne(
                    {
                      username: userData.username,
                      email: userData.email,
                      library: { $elemMatch: {storyId: req.body.storyId} }
                    }, 
                    function(err, result){
                      let obj = result.library.find(x => x.storyId==req.body.storyId);
                      res.json(JSON.stringify(obj));
                   });
                }
              ); 
            }else{
              dbConnect
              .collection("users")
              .findOne(
                {
                  username: userData.username,
                  email: userData.email,
                  library: { $elemMatch: {storyId: req.body.storyId} }
                }, 
                function(err, result){
                  let obj = result.library.find(x => x.storyId==req.body.storyId);
                  res.json(JSON.stringify(obj));
               });
            }
          }
        });
        
        
        
        
});

recordRoutes.route("/db/finishChapter").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const userData = JSON.parse(req.body.user);
  
    dbConnect
    .collection("users")
    .updateOne(
      {
        username: userData.username,
        email: userData.email,
        library: { $elemMatch: {storyId: req.body.storyId} }
      },
      { $set: 
          {
            "library.$.lastCompletedChapter": parseInt(req.body.chapterNumber),
            "library.$.currentNode": 1
          } 
      },
      function(err, result){
        dbConnect
        .collection("users")
        .findOne(
          {
            username: userData.username,
            email: userData.email,
            library: { $elemMatch: {storyId: req.body.storyId} }
          }, 
          function(err, result){
            let obj = result.library.find(x => x.storyId==req.body.storyId);
            res.json(JSON.stringify(obj));
          });
      }
    ); 
      
});

recordRoutes.route("/db/saveProgress").post(function (req, res) {
  const dbConnect = dbo.getDb();
  const userData = JSON.parse(req.body.user);
  if(req.body.lastBg != null){
    dbConnect
    .collection("users")
    .updateOne(
      {
        username: userData.username,
        email: userData.email,
        library: { $elemMatch: {storyId: req.body.storyId} }
      },
      { $set:  
          {
            "library.$.currentNode": req.body.userCurrentNode,
            "library.$.lastBg": req.body.lastBg
          }
      
      }, 
      function(err, result){
        dbConnect
        .collection("users")
        .findOne(
          {
            username: userData.username,
            email: userData.email,
            library: { $elemMatch: {storyId: req.body.storyId} }
          }, 
          function(err, result){
            let obj = result.library.find(x => x.storyId==req.body.storyId);
            res.json(JSON.stringify(obj));
          });
      }
    ); 
  }
  else{
    dbConnect
    .collection("users")
    .updateOne(
      {
        username: userData.username,
        email: userData.email,
        library: { $elemMatch: {storyId: req.body.storyId} }
      },
      { $set:  
          {
            "library.$.currentNode": req.body.userCurrentNode
          }
      }, 
      function(err, result){
        dbConnect
        .collection("users")
        .findOne(
          {
            username: userData.username,
            email: userData.email,
            library: { $elemMatch: {storyId: req.body.storyId} }
          }, 
          function(err, result){
            let obj = result.library.find(x => x.storyId==req.body.storyId);
            res.json(JSON.stringify(obj));
          });
      }
    ); 
  }
    
      
});

// recordRoutes.route("/api/listAllUsers").get(function (req, res) {
//   let db_connect = getDb();
//   db_connect
//     .collection("users")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// // This section will help you get a single record by id
// recordRoutes.route("/api/story/:id").get(function (req, res) {
//   let db_connect = getDb();
//   let myquery = { id: req.params.id};
//   db_connect
//       .collection("stories")
//       .findOne(myquery, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//       });
// });

// recordRoutes.route("/api/play/:urlName/:chapterNumber").get(function (req, res) {
//     let db_connect = getDb();
//     let myquery = { 
//         urlName: req.params.urlName, 
//         number: req.params.chapterNumber
//     };
//     db_connect
//         .collection("chapters")
//         .findOne(myquery, function (err, result) {
//           if (err) throw err;
//           res.json(result);
//         });
//   });

  module.exports = recordRoutes;