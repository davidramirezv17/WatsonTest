const express = require('express');
require('express-async-errors');
const router = require('./src/routes');
const { error } = require('./src/middlewares');
const app = express();

app.use(express.json());
app.use('/', router);
app.use(error);
app.use("/public", express.static(__dirname+ '/public'));

module.exports = app;