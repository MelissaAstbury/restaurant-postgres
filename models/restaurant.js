const client = require('../db/connection');

exports.fetchAllRestaurants = () => {
  return client.query('SELECT * FROM restaurants;').then((result) => {
    return result.rows;
  });
};
