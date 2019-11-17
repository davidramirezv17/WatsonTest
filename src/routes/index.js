const express = require('express');

const router = express.Router();
const watson = require('./watson');

router.use('/watson', watson);
module.exports = router;
