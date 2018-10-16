// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// API Response
router.get('/', function (req, res) {
    res.json({
       status: 'Working as intended',
       message: 'Overworld Hero game record and content API',
    });
});

module.exports = (app) => {
    const GameRecordController = require('./App/Controllers/game_record.controller.js');
    const APIController = require('./App/Controllers/api.controller.js');
    const GameDataController = require('./App/Controllers/game_data.controller.js');
    const EncounterController = require('./App/Controllers/gd_encounter.controller.js');

    app.get('/', APIController.apiDescription)
    
    // Game Records
    app.post('/records', GameRecordController.create);
    app.get('/records', GameRecordController.findAll);
    app.get('/records/:record_id', GameRecordController.findOne);
    app.put('/records/:record_id', GameRecordController.update);
    app.delete('/records/:record_id', GameRecordController.delete);

    // Game Data
    app.get('/gamedata', GameDataController.defaultGameData);
    app.get('/gamedata/collected', GameDataController.collectedGameData);
    
    // Encounters
    app.post('/gamedata/encounters', EncounterController.create);
    app.get('/gamedata/encounters', EncounterController.findAll);
    app.get('/gamedata/encounters/:encounter_id', EncounterController.findOne);
    app.put('/gamedata/encounters/:encounter_id', EncounterController.update);
    app.delete('/gamedata/encounters/:encounter_id', EncounterController.delete);
};