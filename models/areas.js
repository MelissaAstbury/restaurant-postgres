const client = require('../db/connection');

exports.fetchAllAreas = () => {
  return client.query('SELECT * FROM areas;').then((result) => {
    return result.rows;
  });
};

exports.addArea = (area) => {
  return client
    .query('INSERT INTO areas (area_name) VALUES ($1);', [area.area_name])
    .then(({ rows: [area] }) => area);
};
