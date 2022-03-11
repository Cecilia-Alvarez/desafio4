const { urlencoded } = require('body-parser');
const express = require('express');
const path = require('path');
const routes = require('./routes/routes')

const app = express();

app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('./api', routes());

module.exports = app;
