// Filename: api-routes.js
// Initialize express router
var GameRecord     = require('./App/Models/game_record');
let router = require('express').Router();

// API Response
router.get('/', function (req, res) {
    res.json({
       status: 'Working as intended',
       message: 'Overworld Hero game record and content API',
    });
});

//
//  Basic Game Record apply and fetcher
//
router.route('/GameRecords')

    .post(function(req, res) {

        var record = new GameRecord(); 
        record.playerName = req.body.playerName; 
        record.tilesExplored = req.body.tilesExplored; 
        record.biomesExplored = req.body.biomesExplored; 
        record.daysPassed = req.body.daysPassed; 
        record.charactersUnlocked = req.body.charactersUnlocked; 

        record.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Game Record created!' });
        });

    })

    .get(function(req, res) {
        GameRecord.find(function(err, records) {
            if (err)
                res.send(err);

            res.json(records);
        });
    });


//
//  Game Record: Search By ID
//
router.route('/GameRecords/:record_id')
    .get(function(req, res) {
        GameRecord.findById(req.params.record_id, function(err, game_record) {
            if (err)
                res.send(err);
            res.json(game_record);
        });
    })
    
    .put(function(req, res) {
        GameRecord.findById(req.params.record_id, function(err, game_record) {

            if (err)
                res.send(err);

            game_record.playerName = req.body.playerName; 
            game_record.tilesExplored = req.body.tilesExplored; 
            game_record.biomesExplored = req.body.biomesExplored; 
            game_record.daysPassed = req.body.daysPassed; 
            game_record.charactersUnlocked = req.body.charactersUnlocked; 

            game_record.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Game Record updated!' });
            });

        });
    })
    
    .delete(function(req, res) {
        GameRecord.findById(req.params.record_id, function(err, game_record) {

            if (err)
                res.send(err);

            game_record.remove(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Game Record deleted!' });
            })
        });
    });

router.route('/GameScore/:player_name')

    .get(function(req, res) {
        GameRecord.find(req.params.player_name, function(err, game_record) {
            if (err)
                res.send(err);
            res.json(game_record);
        });
    });

// Export API routes
module.exports = router;