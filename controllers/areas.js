const { fetchAllAreas, addArea } = require('../models/areas');

exports.getAllAreas = (req, res, next) => {
  fetchAllAreas().then((areas) => {
    res.status(200).send({ total_areas: areas.length, areas });
  });
};

exports.postArea = (req, res, next) => {
  const body = req.body;
  addArea(body).then((area) => {
    res.status(201).send({
      area,
      message: 'Area has been succesffuly added',
    });
  });
};
