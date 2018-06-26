'use strict';

let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let morgan = require('morgan');
let bodyParser = require('body-parser');
