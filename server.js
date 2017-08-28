var express = require('express');
var app = express();
var path = require("path");

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.use("/public", express.static(path.join(__dirname, 'public')));

var server = app.listen(8081, function () {
   console.log("Example app listening at http://localhost:8081/")
});

