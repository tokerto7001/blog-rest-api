const express = require('express');
const app = express();
require('dotenv').config();

require('./db');


module.exports = app;