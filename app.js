require('log-timestamp');

const bootstrap = require('./src/bootstrap/bootstrap').bootstrap;


console.log('Starting server for "monsters"...');
bootstrap.all();