
//MODULES
var express = require('express');
var app = express();
var router = express.Router();
var db = require('./db/db.js');
var controller = require('./controllers/gamesController.js')

for (var route in controller) {
  router.route("/" + route)
    .get(controller[route].get)
    .post(controller[route].post)
    .put(controller[route].put)
    .delete(controller[route].delete);
}

module.exports = router;
