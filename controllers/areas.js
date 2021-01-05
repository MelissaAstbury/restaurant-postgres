const { fetchAllAreas } = require('../models/areas');

exports.getAllAreas = (req, res, next) => {
  fetchAllAreas().then((areas) => {
    res.status(200).send({ total_areas: areas.length, areas });
  });
};
