const { fetchAllRatings } = require('../models/ratings');

exports.getAllRatings = (req, res, next) => {
  fetchAllRatings().then((ratings) => {
    res.status(200).send({ ratings });
  });
};
