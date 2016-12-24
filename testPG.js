
var config = require('./knexfile');
var env = 'development';
var pgDatabaseConnection = require('knex')(config[env]);
// console.log(pgDatabaseConnection)

// pgDatabaseConnection('projects').insert({id: 1, name: 'Test'})
// .then(function(thatThingYouJustInserted) {
    // console.log(thatThingYouJustInserted)
//     console.log('probably worked')
// })

// pgDatabaseConnection('projects').where('id', 1)
// .then(function(result) {
//     console.log(result)
// })