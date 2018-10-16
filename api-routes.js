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

    app.get('/', APIController.apiDescription)
    
    // Create a new Note
    app.post('/records', GameRecordController.create);

    // Retrieve all Notes
    app.get('/records', GameRecordController.findAll);

    // Retrieve a single Note with noteId
    app.get('/records/:record_id', GameRecordController.findOne);

    // Update a Note with noteId
    app.put('/records/:record_id', GameRecordController.update);

    // Delete a Note with noteId
    app.delete('/records/:record_id', GameRecordController.delete);

    app.get('/gamedata', GameDataController.gameData)
};