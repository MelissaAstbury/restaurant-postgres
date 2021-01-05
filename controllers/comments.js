const { fetchAllComments } = require('../models/comments');

exports.getAllComments = (req, res, next) => {
  fetchAllComments().then((comments) => {
    res.status(200).send({ comments });
  });
};
