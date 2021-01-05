const client = require('../db/connection');

exports.fetchAllAreas = () => {
  return client.query('SELECT * FROM areas;').then((result) => {
    return result.rows;
  });
};
