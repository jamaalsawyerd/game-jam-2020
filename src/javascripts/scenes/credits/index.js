const create = require('./create');
const preload = require('./preload');
const update = require('./update');
const scene = {
  create,
  preload,
  update,
  key: 'credits',
  active: false,
};

module.exports = scene;