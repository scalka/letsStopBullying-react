// Server-side code
console.log('Server-side code running');
const express = require('express'); // imports express
const app = express(); // sets up an (express) app
const server = require('http').Server(app); // creates http server which is using (express) app
const MongoClient = require('mongodb').MongoClient; // import mongo and create mongo client
const bodyParser = require('body-parser'); // import body parser (to use in req.body)

// define directiories which are exposed to web
app.use(express.static(__dirname + '/node_modules'));
// serve files from the public directory
app.use(express.static('public'));
app.use(bodyParser.json()); // body parser to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies

let db;
const url = 'mongodb://localhost:27017/letsstopbullying'; // db url
// connect to the db and start the express server
MongoClient.connect(url, (err, database) => {
  if(err) { return console.log(err); }
  db = database;
  // start the express web server listening on 8080
  server.listen(8080, () => {
    console.log('Well done, now I am listening on ', server.address().port);
  });
});


// ROUTING
app.get('/modulesCollection', (req, res) => {
  // find entries in the database, sort it on score and limit to first six
  // find returns cursor so we need to use toArray method
  db.collection('modules').find().toArray((err, result) => {
    console.log(result);
    if (err) return console.log(err);
    // send result to the client
    //console.log(result);
    res.send(result);
  });
});

//get module data
app.get('/bullying', (req, res) => {
  // find entries in the database, sort it on score and limit to first six
  // find returns cursor so we need to use toArray method
  db.collection('bullying').find().toArray((err, result) => {
    console.log(result);
    if (err) return console.log(err);
    // send result to the client
    //console.log(result);
    res.send(result);
  });
});
