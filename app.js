const express = require('express');
const app = express();
require('dotenv').config();

require('./db');

require('./db/models');


module.exports = app;