var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  host: 'localhost',
  port: 5432,
  database: 'chi',
  max: 20,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

// sends back array of objects, where each object is an owner
// each owner object has the following properties: id, first_name, last_name
router.get('/', function(req, res){
  pool.connect(function(errorConnectingToDB, db, done) {
    if (errorConnectingToDB) {
      console.log('ERROR CONNECTING TO DATABASE');
      res.sendStatus(500);
    } else {
      db.query('SELECT * FROM "owners"', function(queryError, result) {
        done();
        if (queryError) {
          console.log("ERROR MAKING GET QUERY");
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});

// creates entry in owners table of database
// receives owner object with properties: first_name, last_name
router.post('/create', function(req, res){
  pool.connect(function(errorConnectingToDB, db, done) {
    console.log(req.body);
    if (errorConnectingToDB) {
      console.log('ERROR CONNECTING TO DATABASE');
      res.sendStatus(500);
    } else {
      var newOwner = req.body;
      db.query('INSERT INTO "owners" ("first_name", "last_name") VALUES ($1, $2)', [newOwner.ownerFirst, newOwner.ownerLast], function(queryError, result) {
        done();
        if (queryError) {
          console.log("ERROR MAKING POST QUERY");
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

module.exports = router;
