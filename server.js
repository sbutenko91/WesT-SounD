var express = require('express'),
    app = express(),
    compileSass = require('express-compile-sass'),
    path = require("path"),
    root = process.cwd();

var expressGoogleAnalytics = require('express-google-analytics');
var mailService = require('./services/email.service');
var bodyParser = require('body-parser')

var analytics = expressGoogleAnalytics('UA-637057-17');

var jsonParser = bodyParser.json()

app.use(analytics);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/gallery', function (req, res) {
    res.render('gallery');
});
app.get('/services', function (req, res) {
    res.render('./services/services');
});
app.get('/zvuk.html', function (req, res) {
    res.render('./services/sound');
});
app.get('/services/light', function (req, res) {
    res.render('./services/riderLight');
});
app.get('/services/sound', function (req, res) {
    res.render('./services/riderSound');
});
app.get('/svitlo.html', function (req, res) {
    res.render('./services/light');
});
app.get('/services/scene', function (req, res) {
    res.render('./services/scene');
});
app.get('/services/scene/51.html', function (req, res) {
    res.render('./services/scene/stageRent');
});
app.get('/services/scene/52.html', function (req, res) {
    res.render('./services/scene/podium');
});
app.get('/services/scene/53.html', function (req, res) {
    res.render('./services/scene/screens');
});
app.get('/services/scene/54.html', function (req, res) {
    res.render('./services/scene/stageConstruction');
});
app.get('/services/scene/55.html', function (req, res) {
    res.render('./services/scene/turnstile');
});
app.get('/gallery/svitlodiodni_ekrany', function (req, res) {
    res.render('./services/scene/led');
});
app.get('/services/sound/60.html', function (req, res) {
    res.render('./services/sound/acoustic');
});
app.get('/services/light/76.html', function (req, res) {
    res.render('./services/light/disco');
});
app.get('/services/light/77.html', function (req, res) {
    res.render('./services/light/concertEquipment');
});
app.get('/services/light/78.html', function (req, res) {
    res.render('./services/light/laser');
});
app.post('/mail', function (req, res) {
    mailService.sendEmail(req.body);
    res.status(200).send('OK');
});

app.set('views', __dirname + '/views');
app.set("view engine", "jade");
app.use(express.static('public'));

var server = app.listen(8081, function () {
    console.log("Example app listening at http://localhost:8081/")
});
