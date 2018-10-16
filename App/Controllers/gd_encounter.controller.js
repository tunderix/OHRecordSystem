const GameData_Encounter = require('../Models/gd_encounter');

// Create and Save a new Game Record
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Encounter needs title - can not be empty"
        });
    }

    // Create a Game Record
    const encounter = new GameData_Encounter({
        title: req.body.title,
        description: req.body.description,
        encounterType: req.body.encounterType,
        choices: req.body.choices
    });

    // Save Record in the database
    encounter.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Encounter."
        });
    });
};

// Retrieve and return all records from the database.
exports.findAll = (req, res) => {
    GameData_Encounter.find()
    .then(encounters => {
        res.send(encounters);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving encounters."
        });
    });
};

// Find a single record with a record_id
exports.findOne = (req, res) => {
    GameData_Encounter.findById(req.params.encounter_id)
    .then(encounter => {
        if(!encounter) {
            return res.status(404).send({
                message: "Encounter not found with id " + req.params.encounter_id
            });            
        }
        res.send(encounter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Encounter not found with id " + req.params.encounter_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving encounter with id " + req.params.encounter_id
        });
    });
};

exports.update = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Encounter needs title - can not be empty"
        });
    }

    GameData_Encounter.findByIdAndUpdate(req.params.encounter_id, {
        title: req.body.title,
        description: req.body.description,
        encounterType: req.body.encounterType,
        choices: req.body.choices
    }, {new: true})
    .then(encounter => {
        if(!encounter) {
            return res.status(404).send({
                message: "Encounter not found with id " + req.params.encounter_id
            });
        }
        res.send(encounter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Encounter not found with id " + req.params.encounter_id
            });                
        }
        return res.status(500).send({
            message: "Error updating encounter with id " + req.params.encounter_id
        });
    });
};

exports.delete = (req, res) => {
    GameData_Encounter.findByIdAndRemove(req.params.encounter_id)
    .then(encounter => {
        if(!encounter) {
            return res.status(404).send({
                message: "encounter not found with id " + req.params.encounter_id
            });
        }
        res.send({message: "encounter deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "encounter not found with id " + req.params.encounter_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete encounter with id " + req.params.encounter_id
        });
    });
};