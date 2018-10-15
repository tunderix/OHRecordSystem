// server.js

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var GameRecord     = require('./App/Models/game_record');
mongoose.connect('mongodb://oh_web:Ketjukuul4@ds052978.mlab.com:52978/oh_record_service', 
    { 
        useNewUrlParser: true 
    },
    function(err,db){
        if(err){
            console.log(err);
        }
        else {
            console.log('connected to '+ url);
            db.close();
        }
    }
); // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/GameRecords')

    .post(function(req, res) {

        var record = new GameRecord(); 
        record.name = req.body.name; 

        record.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Game Record created!' });
        });

    })

    .get(function(req, res) {
        GameRecord.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

router.route('/GameRecords/:record_id')

    .get(function(req, res) {
        Bear.findById(req.params.record_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
