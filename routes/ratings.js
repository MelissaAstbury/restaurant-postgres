const express = require('express');
const router = express.Router();

const { getAllRatings } = require('../controllers/ratings');

router.get('/', getAllRatings);

module.exports = router;
