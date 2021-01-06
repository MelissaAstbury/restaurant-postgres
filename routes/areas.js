const express = require('express');
const router = express.Router();

const { getAllAreas, postArea } = require('../controllers/areas');

router.get('/', getAllAreas);
router.post('/', postArea);

module.exports = router;
