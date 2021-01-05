const { fetchAllRestaurants } = require('../models/restaurant');

exports.getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants().then((restaurants) => {
    res.status(200).send({ restaurants });
  });
};
