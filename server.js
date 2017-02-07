var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var person = require('./routes/person');

var app = express();

app.use(express.static('public'));
app.use('/person', person);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function (req, res) {
  console.log('Now listening on ', app.get('port'));
});
