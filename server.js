var express = require('express'),
    app = express(),
    compileSass = require('express-compile-sass'),
    path = require("path"),
    root = process.cwd();

var expressGoogleAnalytics = require('express-google-analytics');
var mailService = require('services/email.service');

var analytics = expressGoogleAnalytics('UA-637057-17');

app.use(analytics);

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/gallery', function (req, res) {
    res.render('gallery');
});
app.get('/services', function (req, res) {
    res.render('services');
});
app.get('/zvuk', function (req, res) {
    res.render('sound');
});
app.get('/light', function (req, res) {
    res.render('riderLight');
});
app.get('/sound', function (req, res) {
    res.render('riderSound');
});
app.get('/svitlo.html', function (req, res) {
    res.render('light');
});
app.get('/scene', function (req, res) {
    res.render('scene');
});
app.get('/51.html', function (req, res) {
    res.render('stageRent');
});
app.get('/52.html', function (req, res) {
    res.render('podium');
});
app.get('/53.html', function (req, res) {
    res.render('screens');
});
app.get('/54.html', function (req, res) {
    res.render('stageConstruction');
});
app.get('/55.html', function (req, res) {
    res.render('turnstile');
});
app.get('/svitlodiodni_ekrany', function (req, res) {
    res.render('led');
});
app.get('/60.html', function (req, res) {
    res.render('acoustic');
});
app.get('/76.html', function (req, res) {
    res.render('disco');
});
app.get('/77.html', function (req, res) {
    res.render('concertEquipment');
});
app.get('/78.html', function (req, res) {
    res.render('laser');
});
app.post('/mail', function (req, res) {
    mailService.sendEmail(req);
});
app.use(compileSass({
    root: root + '/public',
    sourceMap: true, // Includes Base64 encoded source maps in output css 
    sourceComments: true, // Includes source comments in output css 
    watchFiles: true, // Watches sass files and updates mtime on main files for each change 
    logToConsole: false // If true, will log to console.error on errors 
}));

app.use(express.static('public'));

app.set("view engine", "jade");

var server = app.listen(8081, function () {
    console.log("Example app listening at http://localhost:8081/")
});
