/* eslint-disable no-console */
const { format } = require('date-fns');

const formatMessage = (message) => `[${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}]: ${message}`;

exports.log = (message) => {
  console.log(formatMessage(message));
};

exports.warn = (message) => {
  console.log(formatMessage(message));
};

exports.error = (message) => {
  console.log(formatMessage(message));
};
