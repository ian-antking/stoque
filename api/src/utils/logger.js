/* eslint-disable no-console */
const { format } = require('date-fns');

const levels = {
  info: 'INFO',
  warn: 'WARN',
  error: 'ERROR',
};

const formatMessage = (message, level) => `[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}] ${levels[level]}: ${message}`;

exports.log = (message) => {
  console.log(formatMessage(message, 'info'));
};

exports.warn = (message) => {
  console.warn(formatMessage(message, 'warn'));
};

exports.error = (message) => {
  console.error(formatMessage(message, 'error'));
};
