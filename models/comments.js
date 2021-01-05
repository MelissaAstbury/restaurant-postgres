const client = require('../db/connection');

exports.fetchAllComments = () => {
  return client.query('SELECT * FROM comments;').then((result) => {
    return result.rows;
  });
};
