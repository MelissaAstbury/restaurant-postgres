const express = require('express');
const app = express();

const restaurantRoutes = require('./routes/restaurant');

app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

module.exports = app;
