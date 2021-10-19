const httpStatus = require('http-status');
const { Son } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a son
 * @param {Object} sonBody
 * @returns {Promise<Son>}
 */
const createSon = async (sonBody) => {
  return Son.create(sonBody);
};

/**
 * Query for sons
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySons = async (filter, options) => {
  const sons = await Son.paginate(filter, options);
  return sons;
};



module.exports = {
  createSon,
  querySons,
};
