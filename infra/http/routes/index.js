const express = require('express');
const container = require('../../../dependencies');
const {sampleAPI} = require('../../../controllers/sample')(container);

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ status: 'running' });
});
router.post('/v1/sample', async function(req, res, next) {
  try {
    await sampleAPI({});
    res.sendStatus(200);
  } catch (error) {
    if (error.type == 'VALIDATION_FAIL') {
      return res.sendStatus(400);
    }
    // use if conditions to handle different errors thrown
    return res.sendStatus(500);
  }
});

module.exports = router;
