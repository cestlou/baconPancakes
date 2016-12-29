// var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

var config = require('./knexfile');
var env = 'development';
var pgDatabaseConnection = require('knex')(config[env]);

// configure support for ejs templates
app.set('view engine', 'ejs');

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'static')));

// universal rendering/routing
app.get('/', (req, res) => {
  

  pgDatabaseConnection('projects').where('id', 1)
  .then(function(result) {

    res.render('index', {
      result
    })

  })
  
})

app.get('/projects/:id', (req, res) => {
  
  pgDatabaseConnection('projects').where('id', req.params.id)
  .then(function(result) {
    if(!!result[0]) {
      res.render('projects/index', {
        result
      })
    } else {
      res.render('404', {
        result : "aint shit here"
      })
    }
    
  })
  
})

app.get('/dogScore', function (req, res,html) {
 res.render('projects/dogScore');
});

app.get('/seattlemakers', function (req, res,html) {
 res.render('projects/seattlemakers');
});

app.get('/apptentive', function (req, res,html) {
 res.render('projects/apptentive');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something went wrong', err)
  }
  console.log(`server is listening on ${port}`);
});