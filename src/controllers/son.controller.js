const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { sonService } = require('../services');

const createSon = catchAsync(async (req, res) => {
  const son = await sonService.createSon(req.body);
  res.status(httpStatus.CREATED).send(son);
});

const getSons = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sonService.querySons(filter, options);
  res.send(result);
});


module.exports = {
  createSon,
  createSon,
 createSon,
 getSons,
};
