// server.js

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var GameRecord     = require('./App/Models/game_record');
let apiRoutes = require("./api-routes")

mongoose.connect('mongodb://oh_web:Ketjukuul4@ds052978.mlab.com:52978/oh_record_service', 
    { 
        useNewUrlParser: true 
    },
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
); // connect to our database

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes)

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
