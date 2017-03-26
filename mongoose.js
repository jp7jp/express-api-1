const mongoose = require('mongoose');
const config = require('./config');

// DB Setup
mongoose.Promise = global.Promise; // mpromise is deprecated
if (config.debug) {
  console.log('Database: ',config.database_uri);
}
mongoose.connect(config.database_uri);

module.exports = mongoose;
