// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
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
        GameRecord.find(function(err, records) {
            if (err)
                res.send(err);

            res.json(records);
        });
    });

    /*
router.route('/GameRecords/:record_id')

    .get(function(req, res) {
        GameRecord.findById(req.params.record_id, function(err, game_record) {
            if (err)
                res.send(err);
            res.json(game_record);
        });
    });
*/


// Export API routes
module.exports = router;