var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Great Docker success.\n');
});
app.get('/test/',function(req,res){
  res.send('Great Docker/test success.\n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
