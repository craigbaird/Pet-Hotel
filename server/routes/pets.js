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

// sends back array of objects, where each object is a pet belonging to the owner with the specified id.
// each pet object has the following properties: id, owner_id, name, breed, color
router.get('/:owner_id', function(req, res){
  pool.connect(function(errorConnectingToDB, db, done) {
    if (errorConnectingToDB) {
      console.log('ERROR CONNECTING TO DATABASE');
      res.sendStatus(500);
    } else {
      var ownerId = req.params.owner_id;
      db.query('SELECT * FROM "pets" WHERE "owner_id" = $1;', [ownerId], function(queryError, result) {
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

// creates entry in pets table of database
// receives pet object with properties: owner_id, name, breed, color
router.post('/create', function(req, res){
  pool.connect(function(errorConnectingToDB, db, done) {
    console.log(req.body);
    if (errorConnectingToDB) {
      console.log('ERROR CONNECTING TO DATABASE');
      res.sendStatus(500);
    } else {
      var newPet = req.body;
      db.query('INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES ($1, $2, $3, $4);', [newPet.owner_id, newPet.name, newPet.breed, newPet.color], function(queryError, result) {
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
