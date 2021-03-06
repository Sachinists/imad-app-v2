var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.use(express.static('public'));
app.use('/ui',express.static(__dirname+'/ui'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
/*
app.get('/style', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});*/
/*
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

app.get('/ui/dev.png',function(req,res){ res.sendFile(path.join(__dirname, 'ui','dev.png'));});
