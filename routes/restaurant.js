const express = require('express');
const router = express.Router();

const { getAllRestaurants } = require('../controllers/restaurant');

router.get('/', getAllRestaurants);

module.exports = router;
