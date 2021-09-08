const { log } = require('../utils/logger');

exports.logging = (req, _, next) => {
  const { method, path } = req;
  log(`${method} ${path}`);
  next();
};
