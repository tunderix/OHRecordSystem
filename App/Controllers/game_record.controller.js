const GameRecord = require('./App/Models/game_record.js');

// Create and Save a new Game Record
exports.create = (req, res) => {
    // Validate request
    if(!req.body.playerName) {
        return res.status(400).send({
            message: "Game Record needs playerName - can not be empty"
        });
    }

    // Create a Game Record
    const game_record = new GameRecord({
        playerName: req.body.playerName, 
        tilesExplored: req.body.tilesExplored, 
        biomesExplored: req.body.biomesExplored, 
        daysPassed: req.body.daysPassed,
        charactersUnlocked: req.body.charactersUnlocked, 
    });

    // Save Record in the database
    game_record.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the GameRecord."
        });
    });
};

// Retrieve and return all records from the database.
exports.findAll = (req, res) => {
    GameRecord.find()
    .then(records => {
        res.send(records);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving records."
        });
    });
};

// Find a single record with a record_id
exports.findOne = (req, res) => {
    GameRecord.findById(req.params.record_id)
    .then(record => {
        if(!record) {
            return res.status(404).send({
                message: "Record not found with id " + req.params.record_id
            });            
        }
        res.send(record);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.record_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving record with id " + req.params.record_id
        });
    });
};

exports.update = (req, res) => {
    // Validate request
    if(!req.body.playerName) {
        return res.status(400).send({
            message: "Game Record needs playerName - can not be empty"
        });
    }

    GameRecord.findByIdAndUpdate(req.params.record_id, {
        playerName: req.body.playerName, 
        tilesExplored: req.body.tilesExplored, 
        biomesExplored: req.body.biomesExplored, 
        daysPassed: req.body.daysPassed,
        charactersUnlocked: req.body.charactersUnlocked, 
    }, {new: true})
    .then(record => {
        if(!record) {
            return res.status(404).send({
                message: "Game Record not found with id " + req.params.record_id
            });
        }
        res.send(record);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Game Record not found with id " + req.params.record_id
            });                
        }
        return res.status(500).send({
            message: "Error updating record with id " + req.params.record_id
        });
    });
};

exports.delete = (req, res) => {
    GameRecord.findByIdAndRemove(req.params.record_id)
    .then(record => {
        if(!record) {
            return res.status(404).send({
                message: "Game Record not found with id " + req.params.record_id
            });
        }
        res.send({message: "Game Record deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Game Record not found with id " + req.params.record_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete record with id " + req.params.record_id
        });
    });
};