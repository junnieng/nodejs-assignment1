const express = require('express');
const path = require('path');
const ejs = require('ejs');

//Express module

const app = express();

app.set ('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get ('/', function(req, res) {
    res.render('index', {title: 'Home'});
});

app.get ('/contact', function(req, res) {
    res.render('contact', {title: 'Contact'});
});

app.get ('/page', function(req, res) {
    res.render('page', {title: 'Page'});
});

app.get ('/anotherpage', function(req, res) {
    res.render('anotherpage', {title: 'Another Page'});
});

//Serve static assets from a public direction:
app.use(express.static(path.join(__dirname, 'public')));

// Moment code for current year in footer
const moment = require('moment');

app.locals.year= () => {
    return moment().format('YYYY');
}

//Return 404 errors
app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

//Start server
const port = process.env.PORT || 3000;
app.listen (port, () => console.log(`Listening on port ${port}...`));