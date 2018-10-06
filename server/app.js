'use strict';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
const seedDatabaseIfNeeded = require('./config/seed');

// Setup server
const app = express();
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip,  () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

seedDatabaseIfNeeded();

// Expose app
exports = module.exports = app;