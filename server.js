'use strict'

let fs = require('fs');
let path = require('path');
let knexPath = path.join(__dirname, 'knexfile.js');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;
let env = 'development';

let config = require(knexPath)[env];
let knex = require('knex')(config);
let assassins = require('./routes/assassinroutes.js');
let codeNames = require('./routes/codenamesroutes.js');
let targets = require('./routes/targetroutes.js');
let clients = require('./routes/clientroutes.js')
let contracts= require('./routes/contractroutes.js');
let assassinContracts = require('./routes/assassincontractroutes.js')

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(express.static(path.join('public')));

app.use(assassins);

app.use(function(err, req, res, next) {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});


module.exports = app;
