const express = require('express');
const { TaskDb } = require('./models');

const app = express();

app.use(express.json());

module.exports = app;
