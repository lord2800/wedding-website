#!/usr/bin/env node

var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	marked = require('marked'),
	path = require('path'),
	fs = require('fs'),
	firebase = require('firebase')
;

var db = new firebase(process.env.FIREBASE_URL);
var app = module.exports = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var template = fs.readFileSync(path.join(__dirname, 'pages', 'template.html')).toString();

function content(str) {
	if(process.env.NODE_ENV !== 'production') {
		template = fs.readFileSync(path.join(__dirname, 'pages', 'template.html')).toString();
	}
	return template.replace('{{content}}', str.toString());
}

function sendPage(page, res) {
	var file = path.join(__dirname, 'pages', page + '.md');
	fs.stat(file, function (err, stats) {
		if (err) {
			return res.status(500).send(content('<p>Oops! A terrible error has occured. Try going back and doing it again?</p>'));
		}
		if (!stats.isFile()) {
			return res.status(404).send(content('<p>Sorry, that page does not exist!</p>'));
		}
		fs.readFile(file, { encoding: 'utf-8' }, function (err, md) {
			res.status(200).send(content(marked(md)));
		});
	});
}

app.get('/', function (req, res) {
	sendPage('index', res);
});

app.get('/:page', function (req, res) {
	var page = req.params.page || 'index';
	sendPage(page, res);
});

app.post('/rsvp', function (req, res) {
	var rsvp = db.push();
	rsvp.set(req.body, function (err) {
		if (err) {
			return res.status(500).send(sendPage('rsvp-failed', res));
		}
		sendPage('rsvp-success', res);
	});
});

app.delete('/reload', function (req, res) {
	template = fs.readFileSync(path.join(__dirname, 'pages', 'template.html'));
	res.status(200).send({ok: true});
});

app.listen(process.env.PORT || 3000);
