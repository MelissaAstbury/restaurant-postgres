const express = require('express');
const app = express();

const areasRoutes = require('./routes/areas');

app.use(express.json());

app.use('/api/areas', areasRoutes);

module.exports = app;
