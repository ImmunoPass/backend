const app = require('./app');
const config = require('./config/config');
const logger = require('./infra/utils/logger');
const db = require("./infra/db/models/index");
db.sequelize.sync({ force: false})

let server;
server = app.listen(config.PORT, () => {
  logger.info(`Listening to port ${config.PORT}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = error => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});