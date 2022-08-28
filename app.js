const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

require('./db');

require('./db/models');

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


// set up a 404 error handler
app.all("*", (req, res, next) => {
    return res.status(404).send('NOT FOUND!!!')
});

module.exports = app;