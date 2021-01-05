const client = require('../db/connection');

exports.fetchAllRatings = () => {
  return client.query('SELECT * FROM ratings;').then((result) => {
    return result.rows;
  });
};
