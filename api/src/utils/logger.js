/* eslint-disable no-console */
const { format } = require('date-fns');

exports.log = (message) => {
  console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}]: ${message}`);
};

exports.warn = (message) => {
  console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}]: ${message}`);
};

exports.error = (message) => {
  console.log(`[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}]: ${message}`);
};
