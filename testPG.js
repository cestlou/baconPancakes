
var config = require('./knexfile');
var env = 'development';
var pgDatabaseConnection = require('knex')(config[env]);
console.log(pgDatabaseConnection)