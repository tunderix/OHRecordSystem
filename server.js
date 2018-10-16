// server.js

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
const dbConfig = require('./App/Config/database.config.js');

mongoose.connect(dbConfig.url, { 
        useNewUrlParser: true 
    },
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
); // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

require('./api-routes')(app);
app.listen(port);

console.log('Magic happens on port ' + port);
