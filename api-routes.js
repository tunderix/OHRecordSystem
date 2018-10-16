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

module.exports = (App) => {
    const GameRecordController = require('./Controllers/game_record.controller.js');
    const APIController = require('./Controllers/api.controller.js');
    const GameDataController = require('./Controllers/game_data.controller.js');
    const EncounterController = require('./Controllers/gd_encounter.controller.js');

    App.get('/', APIController.apiDescription)
    
    // Game Records
    App.post('/records', GameRecordController.create);
    App.get('/records', GameRecordController.findAll);
    App.get('/records/:record_id', GameRecordController.findOne);
    App.put('/records/:record_id', GameRecordController.update);
    App.delete('/records/:record_id', GameRecordController.delete);

    // Game Data
    App.get('/gamedata', GameDataController.defaultGameData);
    App.get('/gamedata/collected', GameDataController.collectedGameData);
    
    // Encounters
    App.post('/gamedata/encounters', EncounterController.create);
    App.get('/gamedata/encounters', EncounterController.findAll);
    App.get('/gamedata/encounters/:encounter_id', EncounterController.findOne);
    App.put('/gamedata/encounters/:encounter_id', EncounterController.update);
    App.delete('/gamedata/encounters/:encounter_id', EncounterController.delete);
};