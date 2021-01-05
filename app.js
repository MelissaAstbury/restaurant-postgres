const express = require('express');
const app = express();

const areasRoutes = require('./routes/areas');
const restaurantRoutes = require('./routes/restaurant');
const commentsRoutes = require('./routes/comments');
const ratingsRoutes = require('./routes/ratings');

app.use(express.json());

app.use('/api/areas', areasRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/ratings', ratingsRoutes);

module.exports = app;
