
const config = {
  debug: false,
  secret: 'SOME_SECRET_STRING',
  database_uri: 'mongodb://localhost/api-1',
  port: 3001
};

if (process.env.NODE_ENV === 'test') {
  config.database_uri = 'mongodb://localhost/api-1-test';
}

module.exports = config;
