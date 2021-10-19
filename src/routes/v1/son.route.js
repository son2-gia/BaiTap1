const express = require('express');
const sonController = require('../../controllers/son.controller');

const router = express.Router();

router
  .route('/')
  .post(sonController.createSon)
  .get(sonController.getSons);



module.exports = router;
