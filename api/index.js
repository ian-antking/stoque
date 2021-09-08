const app = require('./src/app');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  logger.log(`app is listenting on ${PORT}`);
});
