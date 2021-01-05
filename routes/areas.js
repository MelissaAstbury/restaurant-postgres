const express = require('express');
const router = express.Router();

const { getAllAreas } = require('../controllers/areas');

router.get('/', getAllAreas);

module.exports = router;
