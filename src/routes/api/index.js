const express = require('express');
const router = express.Router();

router.use('/superheroes', require('./superheroes'));
router.use('/superpowers', require('./superpowers'));

module.exports = router;