'use strict';

let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let morgan = require('morgan');
let bodyParser = require('body-parser');

app.disable('x-powered-by');
app.use(morgan('short'));


app.listen(port, function() {
	console.log('Listening on port', port);
});
