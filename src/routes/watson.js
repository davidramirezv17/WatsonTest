const express = require('express');
const { asyncHandler } = require('../middlewares');
const { watsonController } = require('../controllers');
const router = express.Router();

router.route('/').get(asyncHandler(watsonController.sendMessage));
module.exports = router;
