// var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
const hostname = '127.0.0.1';
const port = 5432;


// configure support for ejs templates;
app.set('view engine', 'ejs');
app.set('views', express.static(__dirname + '/views'));

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'static')));

// universal rendering/routing
app.get('/', (req, res) => {  
  res.render('index')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something went wrong', err)
  }
  console.log(`server is listening on ${port}`);
});
